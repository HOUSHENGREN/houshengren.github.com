(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{414:function(s,n,a){"use strict";a.r(n);var t=a(2),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("这部分是同事的代码。")]),s._v(" "),n("p",[s._v("实现文字滚动效果是利用了transform的translateX属性，加个定时器，调整好时间，每隔一定时间向右移动一段距离，就能实现滚动效果.")]),s._v(" "),n("p",[s._v("如何判断是否滚动呢？利用overflow：hidden，判断文字的长度有无溢出行宽，进而得以判断。")]),s._v(" "),n("p",[s._v("我多加了一段代码 "),n("code",[s._v(':key="_=> new Date()"')]),s._v("。由于组件复用的原因，一个页面多次引用时，mounted，只执行一次，第二次复用时，不再走mounted函数，就无法在第二次复用时正确判断是否需要滚动。举个例子，v-for的数组被重新赋值，就会有复用情况。使用了key就能强制加载一遍该组件。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<template>\n  <div ref="scroll-wrap" :key="_=> new Date()" class="scroll-wrap">\n    <div ref="scroll" class="scroll">{{ value }}</div>\n  </div>\n</template>\n\n<script>\nexport default {\n  props: {\n    value: {\n      type: [Number, String],\n      default: \'\'\n    }\n  },\n  data() {\n    return {\n      isReverse: false,\n      timer: null,\n      gapTimer: null\n    };\n  },\n  mounted() {\n    this.setScroll();\n  },\n  beforeDestroy() {\n    clearInterval(this.timer);\n    clearTimeout(this.gapTimer);\n  },\n  methods: {\n    setScroll() {\n      const scroll = this.$refs.scroll;\n      const scrollWidth = scroll.scrollWidth;\n      const clientWidth = scroll.clientWidth;\n      const scrollLength = scrollWidth - clientWidth;\n      let curLength = 0;\n      this.timer = setInterval(() => {\n        if (curLength <= scrollLength) {\n          curLength += 0.5;\n        }\n        if (curLength >= scrollLength) {\n          this.gapTimer = setTimeout(() => {\n            curLength = 0;\n          }, 1000);\n        }\n        scroll.style.transform = `translateX(-${curLength}px)`;\n      }, 25);\n    }\n  }\n};\n<\/script>\n\n<style scoped lang="scss">\n.scroll-wrap {\n  width: 100%;\n  overflow: hidden;\n  .scroll {\n    width: 100%;\n    transform: translateX(0);\n  }\n}\n</style>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br")])]),n("p",[s._v("效果如下")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/648e654442c34379a894b29d857fc4fd~tplv-k3u1fbpfcp-watermark.image?",alt:"动画.gif"}})]),s._v(" "),n("p",[s._v("由于overflow：hidden，flex布局下文字不会撑开盒子，故在flex布局也能正常使用，如下实例")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<template>\n  <div>\n    <div class="scroll">\n      <div class="scroll-item">\n        <ScrollText\n          text="4444444444444444444444444444444444444444444"\n        />\n      </div>\n      <div class="scroll-item">\n        <ScrollText\n          text="888"\n        />\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  components: {\n    ScrollText: () => import(\'./scrollText/index\')\n  },\n  data() {\n    return {}\n  }\n}\n<\/script>\n\n<style lang="scss" scoped>\n.scroll {\n  display: flex;\n  width: 200px;\n  margin-left: 50px;\n  margin-top: 50px;\n  .scroll-item {\n    flex: 1;\n    &:nth-child(1) {\n        margin-right: 20px;\n    }\n  }\n}\n</style>\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br")])]),n("p",[n("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/00f9eec50181473db617f2ce2dc75be6~tplv-k3u1fbpfcp-watermark.image?",alt:"002.gif"}})]),s._v(" "),n("p",[s._v("进一步的优化方案是，不使用key，而是使用通过监听value的变化去重新执行"),n("code",[s._v("setScroll")]),s._v("，如此vue进行dom的diff时可以复用之前的节点。这个思路有点像我二次封装的qrcode。")])])}),[],!1,null,null,null);n.default=e.exports}}]);