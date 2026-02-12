---
title: 基于大规模数据集的DiffSinger训练和微调
date: 2026-02-10 16:42:00
cover: https://i0.hdslb.com/bfs/openplatform/a1f42b23b5c8ac5c334734140ad96e78053dc1c0.png
tags:
  - 歌声合成
  - python
  - diffsinger
categories:
  - 技术笔记
description: 基于大规模数据集微调的歌声合成模型底模，以及微调后的进展
---
# 基于大规模数据集的DiffSinger训练和微调

## 前言

目前，在2026年的今天，各种大模型层出不穷。特化版的也有很多。比如医学大模型之类的。它们的原理都是训练出基底模型，在这个基础上进行微调。而soft-vc vits 等svc的模型也采用了这样的思路。所以我想把这个思路在diffsinger上实现。

## 一、准备过程

在2024年，本人就有了类似的想法。在2024年的七月。通过在互联网上搜索，把相关的大型歌声合成数据集下载下来。打算训练出一个large scale的基底模型。可惜因为高考以及学业等方面的原因，这部分内容挪到了26年一月份开展。利用autodl里面的大佬给出自动全流程的多语种镜像来进行对数据集的自动标注

数据集包含了各种各样，唱法以及风格各异的男性说话人的高质量的歌声音频。总共（中、日、英）合起来达到了将近11h的大规模数据集。这些数据集是说话人合在一起的。这样做的原因是让模型能够学到男性说话人唱歌的特性。尽可能的捕获到所有男性说话人的相关的向量空间。

大佬的代码里面仅支持中文标注用fun-asr的。之前还看到有人用whisper识别。但是这个whisper不仅仅是很大，而且下载也很不方便。所以我直接用了大模型 Qwen3的Omni模型。这个模型可以识别中文、英文、和日文。而且这个是个多模态的模型。用起来也很方便。当时我代码是这样写的。

```python
#diffsinger_dataset_tools/modules/ds_tools/wav2words.py

import re
from funasr import AutoModel
import pathlib
from pypinyin import lazy_pinyin, load_phrases_dict, Style
from pykakasi import kakasi
from tqdm import tqdm
import requests
import json
import base64
import fugashi
import os
def qwen_asr(file_path):
    print("in q asr")
    # ============================================================================
    # 配置部分 - API 连接信息
    # ============================================================================

    # DMXAPI 的 URL 地址
    url = "https://www.dmxapi.cn/v1/responses"

    # API 密钥 - 用于身份验证和访问控制
    api_key = "sk-**********"  # ⚠️ 请替换为你的API密钥

    # ============================================================================
    # 请求头配置 - 设置内容类型和授权信息
    # ============================================================================
    headers = {
        "Content-Type": "application/json",      # 指定请求体为 JSON 格式
        "Authorization": f"{api_key}",    # token 认证方式
    }
    # ============================================================================
    #                              工具函数
    # ============================================================================
    def file_to_base64(path):
        """
        读取本地文件并转换为Base64编码字符串

        参数:
            path: 文件路径
        返回:
            Base64编码的字符串
        """
        with open(path, "rb") as f:
            return base64.b64encode(f.read()).decode("utf-8")


    # ----------------------------------------------------------------------------
    #                           音频数据准备
    # ----------------------------------------------------------------------------
    # 根据是否填写文件路径，自动转换本地文件或使用示例数据
    if file_path:
        audio_data = f"data:;base64,{file_to_base64(file_path)}"
    else:
        # 默认示例数据（Base64编码的音频片段）
        audio_data = "data:;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjI5...."

    # ============================================================================
    # 请求参数配置 - AI 模型与输入内容
    # ============================================================================
    data = {
        "model": "qwen3-omni-flash-all",
        "input": [
            {
                "role": "user",
                "content": [
                    {
                        "type": "input_audio",
                        "input_audio": {
                            "data": audio_data,
                            "format": "wav",
                        },
                    },
                    {"type": "text", "text": "提取出这段音频的歌词"},
                ],
            },
        ],
        "stream": True,
        "stream_options": {
            "include_usage": True
        },
        "modalities": ["text"],
        #"audio": {"voice": "Serena", "format": "wav"}
    }

    # ============================================================================
    # 发送请求并处理流式响应
    # ============================================================================

    # 确保 output 目录存在
    # 发送 POST 请求到 API 服务器,启用流式响应模式
    response = requests.post(url, headers=headers, json=data, stream=True)

    # 检查响应状态码
    if not response.ok:
        print(f"❌ HTTP 错误: {response.status_code}")
        print(f"响应内容: {response.text}")
        exit(1)

    # ----------------------------------------------------------------------------
    # 处理流式响应 - 解析文字并保存音频
    # ----------------------------------------------------------------------------
    try:
        current_event = None
        text_content = ""  # 累积文字内容

        # 逐行读取响应流
        for line in response.iter_lines():
            if line:
                line_text = line.decode('utf-8').strip()

                if line_text.startswith('event: '):
                    current_event = line_text[7:]

                elif line_text.startswith('data: '):
                    data_str = line_text[6:]

                    try:
                        json_data = json.loads(data_str)

                        # 处理文字增量
                        if current_event == 'response.output_text.delta':
                            delta = json_data.get('delta', '')
                            if delta:
                                #print(delta, end='', flush=True)
                                text_content += delta

                        # 处理音频数据

                    except json.JSONDecodeError:
                        pass

        #print(f"\n\n完整文字内容:\n{text_content}")

    # ----------------------------------------------------------------------------
    # 异常处理
    # ----------------------------------------------------------------------------
    except KeyboardInterrupt:
        # 处理用户中断 - 当用户按 Ctrl+C 时优雅退出
        #print("\n\n⚠️ 用户中断了请求")
        pass

    except Exception as e:
        # 处理其他异常 - 捕获并显示任何意外错误
        #print(f"\n\n❌ 发生错误: {e}")
        pass

    # 最后换行 - 确保输出格式整洁
    #print()
    return text_content

class Wav2Words():
    def __init__(self, funasr_model=None, pinyin_dict=None, lang=None):
        self.model = funasr_model or AutoModel(model="paraformer-zh", vad_model="fsmn-vad", disable_update=True)
        self.pinyin_dict = pinyin_dict
        self.lang = lang or 'zh'

    def run_funasr(self, wav_file):
            model = self.model
            results = model.generate(input=str(wav_file))
            full_text = ''.join([result['text'] for result in results])
            if self.lang == 'zh':
                #TODO: other languages
                characters = re.sub(r'[a-zA-Z\s]', '', full_text)
            return(characters)


    def text2pinyin(self, text):
        if self.pinyin_dict:
            load_phrases_dict(self.load_phrases_from_txt(self.pinyin_dict))
        pinyin_content = ' '.join(lazy_pinyin(text, style=Style.NORMAL, errors='ignore'))
        return(pinyin_content)
    def text2romaji(self,text):
        # 使用fugashi分词，再用pykakasi转罗马音
        tagger = fugashi.Tagger()
        kks = kakasi()

        # 分词
        words = tagger(text)
        word_list = [word.surface for word in words]

        # 转换为罗马音
        sym_list=[",",".","?","、"]
        romaji_list = []
        for word in word_list:
            result = kks.convert(word)
            romaji = ''.join([item['hepburn'] for item in result])
            if romaji not in sym_list:
                romaji_list.append(romaji)
        result=' '.join(romaji_list)
        

        print("原文:", text)
        print("罗马音:", result)
        return result
    def text2en(self,text):
        # 使用fugashi分词，再用pykakasi转罗马音
        pre_text=text.replace("\n"," ")
        pre_text=pre_text.replace(",","")
        pre_text=pre_text.replace(".","")
        pre_text=pre_text.replace("?","")
        return pre_text
        


    def load_phrases_from_txt(self, dict_path):
        phrases_dict = {}
        with open(dict_path, 'r', encoding='utf-8') as file:
            for line in file:
                parts = line.strip().split(':')
                if len(parts) == 2:
                    phrase = parts[0]
                    pinyin_str_list = parts[1].split(',')
                    pinyin_list_of_lists = [[pinyin] for pinyin in pinyin_str_list]
                    phrases_dict[phrase] = pinyin_list_of_lists
        return(phrases_dict)
    
def funasr_folder(wav_folder, out_folder):
    wd = Wav2Words()
    wav_folder = pathlib.Path(wav_folder)
    out_folder = pathlib.Path(out_folder)
    if wav_folder.is_dir():
        wav_files = list(wav_folder.rglob('*.wav'))
    else:
        print(f"wav_folder error")
    for wav_file in wav_files:
        characters = wd.run_funasr(wav_file)
        lab_file_name = wav_file.stem + ".lab"
        with open(out_folder / lab_file_name, 'w', encoding='utf-8') as f:
            f.write(characters)

def qwen_folder(wav_folder, out_folder):
    print("in q folder")
    #wd = Wav2Words()
    wav_folder = pathlib.Path(wav_folder)
    out_folder = pathlib.Path(out_folder)
    if wav_folder.is_dir():
        wav_files = list(wav_folder.rglob('*.wav'))
    else:
        print(f"wav_folder error")
    #print(wav_files)
    for wav_file in tqdm(wav_files):
        characters = qwen_asr(wav_file)
        lab_file_name = wav_file.stem + ".lab"
        with open(out_folder / lab_file_name, 'w', encoding='utf-8') as f:
            f.write(characters)

def pinyin_folder(lab_folder, out_folder, pinyin_dict):
    wd = Wav2Words(pinyin_dict=pinyin_dict)
    lab_folder = pathlib.Path(lab_folder)
    out_folder = pathlib.Path(out_folder)
    if lab_folder.is_dir():
        lab_files = list(lab_folder.rglob('*.lab'))
    for lab_file in lab_files:
        with open(lab_file, 'r', encoding='utf-8') as file:
            characters = file.read()
        pinyin_content = wd.text2pinyin(characters)
        lab_file_name = lab_file.stem + ".lab"
        with open(out_folder / lab_file_name, 'w', encoding='utf-8') as f:
            f.write(pinyin_content)
def romaji_folder(lab_folder, out_folder, pinyin_dict):
    wd = Wav2Words()
    lab_folder = pathlib.Path(lab_folder)
    out_folder = pathlib.Path(out_folder)
    if lab_folder.is_dir():
        lab_files = list(lab_folder.rglob('*.lab'))
    for lab_file in tqdm(lab_files):
        with open(lab_file, 'r', encoding='utf-8') as file:
            characters = file.read()
        pinyin_content = wd.text2romaji(characters)
        lab_file_name = lab_file.stem + ".lab"
        with open(out_folder / lab_file_name, 'w', encoding='utf-8') as f:
            f.write(pinyin_content)
def en_folder(lab_folder, out_folder, pinyin_dict):
    wd = Wav2Words()
    lab_folder = pathlib.Path(lab_folder)
    out_folder = pathlib.Path(out_folder)
    if lab_folder.is_dir():
        lab_files = list(lab_folder.rglob('*.lab'))
    for lab_file in lab_files:
        with open(lab_file, 'r', encoding='utf-8') as file:
            characters = file.read()
        pinyin_content = wd.text2en(characters)
        lab_file_name = lab_file.stem + ".lab"
        with open(out_folder / lab_file_name, 'w', encoding='utf-8') as f:
            f.write(pinyin_content)

#S=Wav2Words()
#S.text2romaji("こんにちは")
#S.text2romaji("おはようございます")
```

我用这样的操作，把中文、英文和日文的音频都成功的进行了处理。弥补了之前的不足。

## 二、训练过程

我们直接拿着标记好的这些数据集，就可以进行底模的训练了。

按照脚本，把标记好的数据发到DiffSinger文件夹里面，再根据语种的不同做一下简单的分类，方便咱们之后做多语种模型。

文件树如下

``` plain text
.
├── male_cn
│   └── raw
│       └── wavs
├── male_en
│   └── raw
│       └── wavs
├── male_ja
│   └── raw
│       └── wavs

```
然后接下来就是配置文件了

```yaml
base_config:
- configs/base.yaml
task_cls: training.acoustic_task.AcousticTask
dictionaries:
  zh: dictionaries/opencpop-extension.txt
  ja: dictionaries/dictionary-ja.txt
  en: dictionaries/tigerdict.txt
extra_phonemes: []
merged_phoneme_groups: []
datasets:
- raw_data_dir: data/male_cn/raw
  speaker: male
  spk_id: 0
  language: zh
  test_prefixes: []
- raw_data_dir: data/male_en/raw
  speaker: male
  spk_id: 0
  language: en
  test_prefixes: []
- raw_data_dir: data/male_ja/raw
  speaker: male
  spk_id: 0
  language: ja
  test_prefixes: []
- raw_data_dir: data/opencpop/raw
  speaker: opencpop
  spk_id: 1
  language: zh
  test_prefixes:
  - '2044'
  - '2086'
  - '2092'
  - '2093'
  - '2100'
- raw_data_dir: data/itako/raw
  speaker: itako
  spk_id: 2
  language: ja
  test_prefixes:
  - itako06_seg006
  - itako13_seg009
  - itako44_seg002
  - itako01_seg003
  - itako42_seg009
- raw_data_dir: data/karasu/raw
  speaker: karasu
  spk_id: 3
  language: ja
  test_prefixes:
  - brave_shine_tv_size_seg2
  - brave_song_seg1
  - CS_avignon_no_hashino_uede_seg6
  - CS_good_morning_to_all2_seg1
  - CS_london_bridge_is_falling_down_seg4
vocoder: NsfHifiGAN
vocoder_ckpt: checkpoints/nsf_hifigan/model.ckpt
audio_sample_rate: 44100
audio_num_mel_bins: 128
hop_size: 512
fft_size: 2048
win_size: 2048
fmin: 40
fmax: 16000
binarization_args:
  shuffle: true
  num_workers: 4
augmentation_args:
  random_pitch_shifting:
    enabled: false
    range:
    - -5.0
    - 5.0
    scale: 0.75
  fixed_pitch_shifting:
    enabled: false
    targets:
    - -5.0
    - 5.0
    scale: 0.5
  random_time_stretching:
    enabled: false
    range:
    - 0.5
    - 2.0
    scale: 0.75
binary_data_dir: data/ds_aco/binary
binarizer_cls: preprocessing.acoustic_binarizer.AcousticBinarizer
spec_min:
- -12
spec_max:
- 0
mel_vmin: -14.0
mel_vmax: 4.0
mel_base: e
energy_smooth_width: 0.12
breathiness_smooth_width: 0.12
voicing_smooth_width: 0.12
tension_smooth_width: 0.12
use_lang_id: true
num_lang: 3
use_spk_id: true
num_spk: 4
use_energy_embed: false
use_breathiness_embed: true
use_voicing_embed: false
use_tension_embed: false
use_key_shift_embed: true
use_speed_embed: true
diffusion_type: reflow
time_scale_factor: 1000
timesteps: 1000
max_beta: 0.02
rel_pos: true
sampling_algorithm: euler
sampling_steps: 20
diff_accelerator: ddim
diff_speedup: 10
hidden_size: 256
backbone_type: lynxnet
backbone_args:
  num_channels: 1024
  num_layers: 6
  kernel_size: 31
  dropout_rate: 0.0
main_loss_type: l2
main_loss_log_norm: false
schedule_type: linear
use_shallow_diffusion: true
T_start: 0.4
T_start_infer: 0.4
K_step: 400
K_step_infer: 400
shallow_diffusion_args:
  train_aux_decoder: true
  train_diffusion: true
  val_gt_start: false
  aux_decoder_arch: convnext
  aux_decoder_args:
    num_channels: 512
    num_layers: 6
    kernel_size: 7
    dropout_rate: 0.1
  aux_decoder_grad: 0.1
lambda_aux_mel_loss: 0.2
num_sanity_val_steps: 1
optimizer_args:
  lr: 0.0006
lr_scheduler_args:
  step_size: 10000
  gamma: 0.75
max_batch_frames: 50000
max_batch_size: 64
dataset_size_key: lengths
val_with_vocoder: true
val_check_interval: 2000
num_valid_plots: 10
max_updates: 160000
num_ckpt_keep: 5
permanent_ckpt_start: 80000
permanent_ckpt_interval: 20000
finetune_enabled: false
finetune_ckpt_path: null
finetune_ignored_params:
- model.fs2.encoder.embed_tokens
- model.fs2.txt_embed
- model.fs2.spk_embed
finetune_strict_shapes: true
freezing_enabled: false
frozen_params: []
```

这个部分的作用呢是将这个多语言的参数进行输入，让模型学到对应的法则。这个是声学模型的，对于唱法模型而言也是一样的。

整个male的数据是11h这样的。opencpop 2h 其他的可能比 2h 都要少。我们的声学训练了 84000steps，唱法训练了 560000steps。

练完之后出锅，开始进行微调

## 三、微调

我们这里以声学模型 ds_aco 举例。我们的目标是将这些很多的说话人特征定向 fit 一个数据集音频质量很差，训练样本很少，覆盖的音域也很少的样本的音色。

听到这里，感觉就有点像LoRA 的思想了，打算我直接拿 low-rank 类似的方式去梳理。在线性代数中，低秩是相对原来来讲少了很多信息的一种方式。但是 DiffSinger 好像我没有找到。我打算用调整 lr 的思路去 fit 一下。于是我把这个 finetune 打开了，我不冻结参数，因为我想希望 fit 完之后的也有一部分基底模型的特性。我把目标说话人的数据也当作male，就是为了这个目的。

一开始我把学习率调到 0.0001，发现 loss 下降的很快，但是效果不好。我以为这样能把一部分音色吃进去，但是后来发现，即使到了 104500 steps 也仍然是混合的音色。于是我就调成了0.0006 终于在 120000 steps 的时候出现了把目标说话人的音色吃进去的情况。这个时候就要停火了。再熬就把原来的汤汁（底模效果）熬没了。

## 四、实验与分析

我们用古早的控制变量法进行试验。设置了以下实验组

1.对照组：使用过去不用 finetune 的声学模型，音高设定为原有音高

2.声学组：使用用 finetune 的声学模型，音高跟对照组一致

3.声学+音高组：使用用 finetune 的声学模型，音高也使用 finetune 的模型

合成了音频之后，我们发现：

1.在同等音高情况下，新模型在音质、咬字细腻度、乐句连贯性超越不用 finetune 的模型。

2.在同等声学模型情况下，新模型的音高大致合拍，但是遇到短音符就变成语调教这样的。怀疑是音高模型缺乏对音符上下文的感知能力，下一步可以用 melody_encoder 解决这个问题

## 五、总结

通过这次基于大规模数据集的DiffSinger训练与微调实验，我们验证了“预训练基底模型 + 针对性微调”这一范式在歌声合成领域的可行性。实验表明，这种两阶段训练策略能够有效平衡通用性与特异性，在保留基底模型丰富歌唱表现力的同时，成功注入目标说话人的音色特征。未来，将结合 melody encoder 等架构，解决现有方案的不足

歌声合成不仅是技术工程，更是艺术与算法的对话。这次实验迈出了一小步，但前方仍有无数旋律等待我们去谱写、去合成。路漫漫其修远兮，吾将上下而求索。

---

**后记**：特别感谢开源社区提供的工具，以及所有在歌声合成领域默默耕耘的研究者与开发者。技术因分享而进步，艺术因创新而永恒。



