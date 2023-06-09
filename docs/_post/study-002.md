---
date: 2022-12-11
title: 第二天 创建自己的展馆模型 | 大帅老猿threejs特训
category: study
cover: /mdImages/017.webp
tags:
  - Blender
  - threejs
---

# 一、前置知识

blender中，物体创建时才可以调整的定点数【类似于表面细分】。据说其它建模软件任意时刻都可以调，没试过不清楚哈。

![drop-donuts-singleE09.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ca3ab98be7224ea5bb3b9d6bb720c19e~tplv-k3u1fbpfcp-watermark.image?)

# 二、起步

## 去掉圆柱体的内主体

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9a825bcd804d4388aad117e9ff7d1f24~tplv-k3u1fbpfcp-watermark.image?)

## 添加内插面，再挤出面
![drop-donuts-singleE10.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7a771eed74ca430095d184cf34cfaf47~tplv-k3u1fbpfcp-watermark.image?)

## 删除主体的一部分
- 1.选中删除部分

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/832ef8d7958844478b9e4801dbefd71e~tplv-k3u1fbpfcp-watermark.image?)

- 2.补充面。删除后，会少了部分面。具体：选中线，挤出面；选中两点，一点吸附到另外一点【选中项吸附到活动项】

![drop-donuts-singleE11.gif](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/35184e15810049dcb271e6c8ad60e993~tplv-k3u1fbpfcp-watermark.image?)

处理好后，如下

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7c4d800aecc248b4af61ca2d0de9a600~tplv-k3u1fbpfcp-watermark.image?)

## 添加6棱柱， 调整高度。

其中调整高度方式有二：

### 1.选中物体，s快捷键拖拽物体；

![drop-donuts-singleE12.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f76824f337ff45e5a84743c59f1d4e3f~tplv-k3u1fbpfcp-watermark.image?)
### 2.选中面，s快捷键拖拽面

![drop-donuts-singleE13.gif](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d0ca3b0aba0346f08ef16add5aa3983c~tplv-k3u1fbpfcp-watermark.image?)
此时发现物体的原点发生偏移，如下图

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c39b6a71a0d64258ab5d3b0c1c602c4d~tplv-k3u1fbpfcp-watermark.image?)
修改原点

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1b597aa92b0e46079fbcfb9c396ff71c~tplv-k3u1fbpfcp-watermark.image?)

## 物体中间插入面
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3aa0ccb9a9e843109fbad859aeb6ac6d~tplv-k3u1fbpfcp-watermark.image?)

![drop-donuts-singleE15.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6510f1a8f50649918cce45bbd6a4a327~tplv-k3u1fbpfcp-watermark.image?)

## 物体各个方向挤出面

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/67102e925cb340c2a142d0189fd7c5a1~tplv-k3u1fbpfcp-watermark.image?)

优化下

![drop-donuts-singleE14.gif](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dd325f13540b4adbbb4577b049d9897b~tplv-k3u1fbpfcp-watermark.image?)

处理好得到

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f083e5cdb20e49c9aca0f3f26e8a1573~tplv-k3u1fbpfcp-watermark.image?)

## 补充知识
### 应用

按住`ctrl + a`->`应用`->`缩放` 可以将物体的xyz缩放比例重置为1。

应用案例：如要给女生做个砰砰跳的爱心，代码修改缩放比例为2时发现并没有缩放两倍？！因为原本的比例不是1、

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c1c3a98720074494b9cbf8879f6a0d1e~tplv-k3u1fbpfcp-watermark.image?)

## 添加文字

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8ff458f478e646ed8939a97631d02cfe~tplv-k3u1fbpfcp-watermark.image?)

如何修改文案呢？按`tab`切换文本编辑模式。


![drop-donuts-singleE16.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9d55cb05574a4be2bcbaa6c9960a365f~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7587722221f74800810b99e5cd469a89~tplv-k3u1fbpfcp-watermark.image?)

`r + 90`将物体旋转至垂直于地面

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8cbc70bd1828427aaf95c587f2e1ec12~tplv-k3u1fbpfcp-watermark.image?)

为了能像操作物体一样操作文字，有两种办法：

### 1.文字转换成网格。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0ca26670339c47cc8fff95f363d8bc57~tplv-k3u1fbpfcp-watermark.image?)

![drop-donuts-singleE17.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/503bf586cd4040b597a9c23897819fea~tplv-k3u1fbpfcp-watermark.image?)
### 2.使用修改修改器

`修改器`-`实体化`

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6452ef0c95084f8c8f41e8cc48264915~tplv-k3u1fbpfcp-watermark.image?)

下面增加文字厚度

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3d6df1c8b78a469598beede73a0ff88a~tplv-k3u1fbpfcp-watermark.image?)

简单调整下文字位置，再加个立方体作为文字的底座，加以微调，如下：

![drop-donuts-singleE18.gif](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/faba3e19875a4451b162d9042a1964b6~tplv-k3u1fbpfcp-watermark.image?)