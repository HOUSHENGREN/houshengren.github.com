---
date: 2023-08-17
title: vue-router不用用户的动态路由实现
category: experience
cover: /mdImages/027.webp
tags:
  - Vue
  - JavaScript
---

实际开发中，会有一种场景：希望不同用户看到的路由不一样，每个用户有一套自己的路由。这要如何实现呢？

我参考了，花裤衩`vue-element-admin`项目里面的实现方案，来说说如何实现。

首先需要从后端获取路由，后端得存一份，之后提供接口允许对其增删改查。用户登录系统后，去查询当前用户的路由数组arr，通过遍历数组arr，依次执行`router.addRoute()`方案添加路由。这样就实现了从服务端获取路由，并回显。

每次路由有更新时，可以调用以下的方法重置路由，其中，`constantRoutes`表示不会变化的路由。

~~~
const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
~~~

这个方法，花裤衩也是参考别人的：在该[issue](https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465)中有大佬提出上面的解决办法，也就是创建新路由实例，将新实例的matcher赋值给旧的路由实例。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2ab3323f298b471390c51a54855b2c48~tplv-k3u1fbpfcp-watermark.image?)
