---
title: 神奇的picture标签
date: 2022-07-24
cover: https://image-store-ocero.vercel.app/img/20220724145108.png
tags:
 - html
categories:
 -  技术笔记
---

# 神奇的picture标签

```html
    <picture>
     <source media="(你的css条件)" srcset="你的图片路径">
        <img src="你的图片路径">
    </picture>
```
    
上面这串代码是用于苹果官网上imac 的自适应图片功能<br>
![](https://image-store-ocero.vercel.app/img/20220724145108.png)<br>
source指你图片的来源，里面包含一个media属性，用于指定css条件，srcset指用于指定图片的路径<br>
最后img指的是匹配不上source的media里面的css条件的图片路径<br>
但是一旦适配了css条件，那么下面的<kbd>img</kbd>标签就会被替换成<kbd>source</kbd>里面的图片路径<br>
这个可以用于自定义的图片适应功能<br>