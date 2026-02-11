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

## 0.前言

目前，在2026年的今天，各种大模型层出不穷。特化版的也有很多。比如医学大模型之类的。它们的原理都是训练出基底模型，在这个基础上进行微调。而soft-vc vits 等svc的模型也采用了这样的思路。所以我想把这个思路在diffsinger上实现。

## 1.准备过程

在2024年，本人就有了类似的想法。在2024年的七月。通过在互联网上搜索