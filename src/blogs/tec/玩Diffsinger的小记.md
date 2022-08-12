---
title: 玩Diffsinger的小记
date: 2022-08-02
cover: https://image-store-ocero.vercel.app/img/20220802214007.png
tags:
 - 歌声合成
 - python
 - diffsinger
 - 趣事小记
 - koishi
 - typescript
categories:
 -  技术笔记
 -  日记
---

# 玩Diffsinger的小记

我折腾这个东西的时候还是从一个群的消息知道的，当时听他们说这个东西有网页版。而且这个还是可以对于我这种深度学习的小菜鸡很容易的。于是我就抱着试一试的想法进了这个网页<br>
<a href="https://huggingface.co/spaces/Silentlin/DiffSinger">在线地址（hugging face）https://huggingface.co/spaces/Silentlin/DiffSinger</a>
<br>
进入了网页，然后呢点击了一些些实例，做了一个提交
结果合成了一个结果
<br>
这个是我提交的参数
```
input text:

小酒窝长睫毛AP是你最美的记号

input note:

C#4/Db4 | F#4/Gb4 | G#4/Ab4 | A#4/Bb4 F#4/Gb4 | F#4/Gb4 C#4/Db4 | C#4/Db4 | rest | C#4/Db4 | A#4/Bb4 | G#4/Ab4 | A#4/Bb4 | G#4/Ab4 | F4 | C#4/Db4

input duration:


0.407140 | 0.376190 | 0.242180 | 0.509550 0.183420 | 0.315400 0.235020 | 0.361660 | 0.223070 | 0.377270 | 0.340550 | 0.299620 | 0.344510 | 0.283770 | 0.323390 | 0.360340
```

<br>
这个音频是我提交的返回的结果，请听
<br>
<audio controls>
    <source src="https://image-store-ocero.vercel.app/img/小酒窝.wav" type="audio/wav"></source>
</audio>
<br>
看到这里我发现我可以用api的方式去调用合成并返回结果
<br>
于是我又又又又开始捅咕（折腾）了
<br>
经过我的分析发现了api是这个
<br>
用 POST 方法来调用

POST https://hf.space/embed/Silentlin/DiffSinger/api/predict/

> Body 请求参数

```json
{
  "data": [
    "小 酒 窝 长 睫 毛 SP 是 你 最 美 的 记 号",
    "C#4 | F#4 | G#4 | A#4 F#4 | F#4 C#4 | C#4 | rest | C#4 | A#4 | G#4 | A#4 | G#4 | F#4 | C#4",
    "0.390789 | 0.375789 | 0.25579 | 0.420789 0.210789 | 0.420789 0.21079 | 0.420789 | 0.13579 | 0.405789 | 0.30079 | 0.330789 | 0.36079 | 0.25579 | 0.315789 | 0.42079"
  ]
}
```

<br>
这里的data是一个二维数组，第一维是输入的文本，第二维是输入的音频，第三维是输入的音频的长度
<br>
然后会返回这样一堆数据
<br>

```json
{
  "data": [
    "data:audio/wav;base64,UklGRmQQBABXQVZFZm10IBAAAAABAA...AAA="
  ],
  "flag_index": null,
  "updated_state": null,
  "durations": [
    13.075409173965454
  ],
  "avg_durations": [
    78.95278157383562
  ]
}
```
<br>
这个里面的data就是我们需要的数据了，这是一串base64的音频数据。
<br>
用完这个api之后我就很快啊，很快把它用到了koishi机器人里面
<br>
以下是这个api的封装好的代码，大家有需要的可以自己拿去用
<br>
index.ts
<br>

```typescript
import { Context} from 'koishi';
import SongList from './SongList';
import Huggingface from './Huggingface';

export function apply(ctx: Context) {
    var resultCache = {}
    ctx.command('botsing', '让我唱歌')
        .shortcut('让我唱歌')
        .action(async ({args,session}) => {
            var song = args[0]
            var result;
            if(args.length==0){
                return '请输入歌名'
            }
            if(!SongList.songs[args[0]]){
                return '没有曲谱唱不出来'
            }
            console.log("正在合成"+song)
            var params = SongList.songs[args[0]];
            if(Object.keys(resultCache).includes(JSON.stringify(params))){
                console.log("从缓存中获取"+song)
                result=resultCache[JSON.stringify(params)]
            }else{
                result=await Huggingface.PredictWithWholeParam(params);
                resultCache[JSON.stringify(params)]=result
            }
            var b64data=result.replace("data:audio/wav;base64,","base64://")
            console.log("合成"+song+"完成")
            return `[CQ:record,file=${b64data}]]`;
        })
}
``` 

<br>
./SongList.ts
<br>

```typescript
export default {
    name: 'DiffSinger',
    songs:{
        "小酒窝":[
            "小 酒 窝 长 睫 毛 SP 是 你 最 美 的 记 号",
            "C#4 | F#4 | G#4 | A#4 F#4 | F#4 C#4 | C#4 | rest | C#4 | A#4 | G#4 | A#4 | G#4 | F#4 | C#4",
            "0.390789 | 0.375789 | 0.25579 | 0.420789 0.210789 | 0.420789 0.21079 | 0.420789 | 0.13579 | 0.405789 | 0.30079 | 0.330789 | 0.36079 | 0.25579 | 0.315789 | 0.42079"
        ],
    }
}
```

./Huggingface.ts
<br>

```typescript
//用axios来调用huggingface的api
import axios from 'axios';
class Huggingface {
    private static readonly Apiurl = 'https://hf.space/embed/Silentlin/DiffSinger/api/predict/';
    public static async PredictWithItem({texts,notes,durations}): Promise<Object> {
        if(texts.length==0 || notes.length==0 || durations.length==0){
            return {
                "status": "error",
                "message": "no text"
            }
        }
        if(texts.length!=notes.length || texts.length!=durations.length || notes.length!=durations.length){
            return {
                "status": "error",
                "message": "texts,notes,durations length not equal"
            }
        }
        var preprocessedTexts ="";
        var preprocessedNotes ="";
        var preprocessedDurations ="";
        //将 歌词 ["你","说","你","不 ","SP"] 转换为”你 说 你 不 SP“
        // 将  音符["D4 D5","D#4/Eb4","D4","rest","rest"] 转换为”D4 D5|D#4/Eb4|D4|rest|rest”
        // 将时长 [0.113740,0.329060,0.287950,0.133480,0.150900] 转换为 "0.113740 | 0.329060 | 0.287950 | 0.133480 | 0.150900 "
        for(var i=0;i<texts.length;i++){
            preprocessedTexts += texts[i]
            preprocessedNotes += notes[i]
            preprocessedDurations += durations[i]
            if(i<texts.length-1){
                preprocessedTexts += " "
                preprocessedNotes += "|"
                preprocessedDurations += "|"
            }
        }
        var postData={
            data:[preprocessedTexts,preprocessedNotes,preprocessedDurations]
        }



        const response = await axios.post(Huggingface.Apiurl, {
            data: postData
        });
        return response.data.data;
    }
    public static async PredictWithString({text,note,duration}): Promise<Object> {
        var postData={
            data:[text,note,duration]
        }


        try{
            const response = await axios.post(Huggingface.Apiurl, {
                data: postData
            });
            return response.data.data;
        }catch(e){
            return {
                "status": "error",
                "message": "error"
            }
        }
       
    }
    public static async PredictWithWholeParam(wholeParam): Promise<String> {
        try{
            const response = await axios.post(Huggingface.Apiurl, {
                data: wholeParam
            });
            return response.data.data[0];
        }catch(e){
            return "error";
        }
    }
}
export default Huggingface;
```


<br>
然后我前几天看到Small_P p主老师用无限尘翻了levitating 我打算自己弄一个嘛
<br>
原视频
<br>
<iframe src="//player.bilibili.com/player.html?aid=686367439&bvid=BV1gU4y1v7ih&cid=783142225&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="100%"> </iframe>
<br>
下了midi，然后自己用汉字一个一个调，最后是这样的
<br>
(该片段示例歌手是嗒啦啦-ACE)
<br>
<audio controls>
    <source src="https://image-store-ocero.vercel.app/img/levitating-嗒啦啦ACE.mp3">
    </source>
</audio>
<br>
调完之后呢，我打算转diffsinger能识别的格式，然后发现这个神奇的事情
<br>
它，报500了
<br>
是的你没听错，失败了
<br>
错误是这样的

```json
{
    "error":"'NoneType' object is not subscriptable"
}
```

<br>
后来我问了一下别人，发现有些歌词不认识
<br>
于是我clone一下源代码，结果发现每一个字都是能读出来的，然后我到现在（2022、8、2）都没搞懂原因
<br>
然后别人开发出了新的玩法，叫做抽卡模式
<br>
到那时候才意识到ai也是有自己的意识
<br>
比如说有的版本会打哈欠，有的版本会像没睡醒一样。
<br>

<audio controls>
    <source src="https://image-store-ocero.vercel.app/img/小手拉大手（改进音素）(困困版)-df.wav"></souce>
</audio>
<br>
比如这个就感觉没睡醒说梦话一样
<br>
顺便一提，这个网络有无参模式，也有调参模式
<br>
但最大bug是没法对齐音素导致很难搞
<br>
无参就是相当于每一次合成都是在抽卡（ACE：我的破自行车称号呢？）
<br>
而有参还是蛮不错的
<br>
据说好像之后可能会有力度参数(energy)，这个参数可以控制音素的强度
<br>
（毕竟这个是在代码中透露过的）
<br>
具体的话大家可以看一下Diffsinger的repo
<br>
（PS：顺便提一嘴作者在注释中调皮了一下，想让大家通过pr的方式给他推荐（rang ta bai piao）一个g2p模型（指汉字到音素的模型））
<br>
今天先更到这里，之后的事情之后再说吧。
