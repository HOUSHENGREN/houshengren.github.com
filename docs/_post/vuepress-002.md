---
date: 2023-08-17
title: vuepress 网络图片显示不了
category: daily life
cover: /mdImages/028.webp
tags:
  - vuepress
---

## 前言

最近发现部署在github上的文章上的网络图片都显示不了。如下

![78f320f579ee4fabb46075161673509.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/00de5a50df884cdd9cae3c93e91883ef~tplv-k3u1fbpfcp-watermark.image?)

经过调查发现，人家做了防盗链，判断了`referrer`，当前网站不在其白名单内，所以显示不了。

## 解决办法

通过设置`meta`为`no-referrer`即可。在`vuepress`里面对应配置添加即可

~~~
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4274936f107f44f39cf4edbebadaa382~tplv-k3u1fbpfcp-watermark.image?)
~~~

