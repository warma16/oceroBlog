---
title: node-json-db的一些坑
date: 2022-08-05 08:00:00
cover: https://oceroimagestore.metalstudio.top/img/20220805152329.png
tags:
  - node
  - nodejs
  - node-json-db
categories:
  - 技术笔记
description: node-json-db的一些坑，记录
permalink: /pages/96ef6f
---

# node-json-db的一些坑

在做一个项目的json-db Adapter的时候，出事情了。

事情是这样的。

我先放一条数据过去，然后呢放完之后立马查询结果提示根本没找到。

这就奇怪了是吧。

后来我才发现数据库是有缓存的，之后需要刷新数据库才会生效。

之后改完的代码如下：

```js
var { JsonDB } = require('node-json-db');
var { Config } = require('node-json-db/dist/lib/JsonDBConfig');

class JsonDatabaseAdapter {
    constructor(databasePath) {
        this.databasePath = databasePath;
        this.init();
    }
    
    init() {
        this.dbInstance = null;
        this.dbInstance = new JsonDB(new Config(this.databasePath, true, true));
    }
    
    async Get(path) {
        var result = await this.dbInstance.getData(path);
        await this.init();
        return result;
    }
    
    async Set(path, value) {
        await this.dbInstance.push(path, value);
        await this.init();
    }
    
    async Remove(path) {
        await this.dbInstance.delete(path);
        await this.init();
    }
    
    async SearchAllResults(path, filterFunc = (val, index) => { return true; }) {
        var result = await this.dbInstance.filter(path, filterFunc);
        await this.init();
        return result;
    }
    
    async isExist(path) {
        var result = await this.dbInstance.exists(path);
        await this.init();
        return result;
    }
    
    async SearchFirstResult(path, filterFunc = (val, index) => { return true; }) {
        var result = await this.dbInstance.find(path, filterFunc);
        await this.init();
        return result;
    }
    
    async GetAllDatas(path) {
        var result = await this.dbInstance.getData(path);
        await this.init();
        return result;
    }
}

module.exports = JsonDatabaseAdapter;
```

其中的init方法是用于初始化/刷新数据库用的。

然后用这个方法就不需要缓存就可以，能做到同步。

（PS：其实还是我懒得换disk-db呜呜呜）

---

