(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{403:function(e,t,s){"use strict";s.r(t);var n=s(2),r=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("实际开发中，会有一种场景：希望不同用户看到的路由不一样，每个用户有一套自己的路由。这要如何实现呢？")]),e._v(" "),t("p",[e._v("我参考了，花裤衩"),t("code",[e._v("vue-element-admin")]),e._v("项目里面的实现方案，来说说如何实现。")]),e._v(" "),t("p",[e._v("首先需要从后端获取路由，后端得存一份，之后提供接口允许对其增删改查。用户登录系统后，去查询当前用户的路由数组arr，通过遍历数组arr，依次执行"),t("code",[e._v("router.addRoute()")]),e._v("方案添加路由。这样就实现了从服务端获取路由，并回显。")]),e._v(" "),t("p",[e._v("每次路由有更新时，可以调用以下的方法重置路由，其中，"),t("code",[e._v("constantRoutes")]),e._v("表示不会变化的路由。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const createRouter = () => new Router({\n  // mode: 'history', // require service support\n  scrollBehavior: () => ({ y: 0 }),\n  routes: constantRoutes\n})\n\nconst router = createRouter()\n\n// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465\nexport function resetRouter() {\n  const newRouter = createRouter()\n  router.matcher = newRouter.matcher // reset router\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br")])]),t("p",[e._v("这个方法，花裤衩也是参考别人的：在该"),t("a",{attrs:{href:"https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue"),t("OutboundLink")],1),e._v("中有大佬提出上面的解决办法，也就是创建新路由实例，将新实例的matcher赋值给旧的路由实例。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2ab3323f298b471390c51a54855b2c48~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);