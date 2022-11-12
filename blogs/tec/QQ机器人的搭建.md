---
title: qq机器人的搭建（koishi+gocqhttp)
date: 2022-08-06
cover: 
tags:
 - qq机器人
 - koishi
 - typescript
 - ts
 - gocqhttp
  - nodejs
categories:
 -  技术笔记
summary: qq机器人的搭建（koishi
---

# qq机器人的搭建（koishi+gocqhttp)

## go-cqhttp

现在这几年，QQ机器人正变得越来越流行。这次说的是koishi+gocqhttp的搭建方式  
gocqhttp的话有一个点需要注意，那就是登录问题（安全锁滑动验证码等）  
这个问题可以通过fiddler抓包来解决  
之后尽量尽量尽量使用websocket来进行通信，这样可以提高通信的效率

## koishi

koishi是一个机器人客户端框架，有丰富的插件系统，在这里我们只需要用koishi的官方readme来解决

```bash
# 初始化项目
yarn init

# 安装 koishi 和相关库
yarn add koishi @koishijs/plugin-adapter-onebot @koishijs/plugin-echo

# 安装 TypeScript 相关依赖
yarn add typescript @types/node esbuild-register -D
```

我个人还是比较喜欢typescript，还是比较稳定的数据结构。而且我的啊哈算法的练习就是用typescript来实现的

新建入口文件 <kbd>index.ts</kbd>，并写下这段代码

```typescript
import { App } from 'koishi'

// 创建一个 Koishi 应用
const app = new App()

// 安装 onebot 适配器插件，并配置机器人
app.plugin('adapter-onebot', {
  protocol: 'ws',
  selfId: 'QQ号',
  endpoint: 'WEBSOCKET 地址',
})

// 安装 echo 插件
app.plugin('echo')

// 启动应用
app.start()
```

解释一下这个 <kbd>app.plugin</kbd>是干什么用的，这个相当于一个插件，字符串的话是插件的名字，对象的话是插件的对象

之后再说一下中间件，koishi的一个我认为的重要的组成部分

```typescript
export function apply(ctx:Context){
    // 在这里写你的中间件代码
    ctx.middleware(async (ctx, next) => {
        // 在这里写你的中间件代码
        await next()
    },true)
}
```

这个apply是一个函数，这个函数的作用是将koishi的上下文对象传递给这个函数，这个函数的作用是在koishi的上下文对象中写入一个中间件

需要注意的一点是一定要写 <kbd>return next()</kbd>不然的话下面的插件就没办法运行了

之后就先介绍这么多，有兴趣的同学可以去看koishi的官方文档

![https://koishi.js.org/manual/starter/](https://koishi.js.org/manual/starter/)
