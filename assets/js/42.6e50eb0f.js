(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{406:function(s,a,e){"use strict";e.r(a);var t=e(2),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("一些易错及特殊问题的踩坑记录")])]),s._v(" "),a("h1",{attrs:{id:"反斜杠的特殊性-会出现意想不到的结果。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反斜杠的特殊性-会出现意想不到的结果。"}},[s._v("#")]),s._v(" 反斜杠的特殊性，会出现意想不到的结果。")]),s._v(" "),a("p",[s._v("当url有反斜杠时最恶心。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("'1112221'.replace(/111/, '\\')\n\n'1112221'.replace(/111/, '\\\\')\n\nconsole.log(54648, '1112221'.replace(/111/, '\\\\'))\n\n'\\\\'.length\n\n'\\'.length\n\n'\\\\'.slice(1)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("url有特殊符号时，如何获取url的数据？")]),s._v(" "),a("h1",{attrs:{id:"array-转对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#array-转对象"}},[s._v("#")]),s._v(" array 转对象")]),s._v(" "),a("p",[s._v("可以将数组并入对象")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("{\n    ...[2,3,4],\n    b: 'ij'\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("开发案例，vxe实现动态列")]),s._v(" "),a("h1",{attrs:{id:"二维数组列求和"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二维数组列求和"}},[s._v("#")]),s._v(" 二维数组列求和")]),s._v(" "),a("p",[s._v("这是在实际开发中遇到的问题")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const arr = [\n    [{weight: 2, length: 7}, {weight: 3, length: 2}, {weight: 4, length: 7}],\n    [{weight: 4, length: 5}, {weight: 4, length: 5}],\n    [{weight: 6, length: 9}, {weight: 8, length: 4}, {weight: 2, length: 5}],\n    [{weight: 1, length: 3}],\n]\n\n1.要求得到一个数组【列求和】\n    [{weight: 13, length: 24}, {weight: 15, length: 11}, {weight: 6, length: 12}],\n2.要求得到一个数组【行求和】\n    [\n        {weight: 9, length: 16}, \n        {weight: 8, length: 10}, \n        {weight: 16, length: 18}, \n        {weight: 1, length: 3}\n    ],\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("行求和简单点，大家能想出很多办法。我说下我的思路：arr.map(i => 里面reduce 求和 )")]),s._v(" "),a("p",[s._v("列求和如何实现，我的想法是搞个空数组，arr两层循环")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const Arr = []\narr.forEach((item, index) => {\n    item.forEach(inItem, inIndex) => {\n        if(!Arr[inIndex]) {\n            Arr[inIndex] = {}\n        }\n        Arr[inIndex].weight =  (+Arr[inIndex].weight || 0) + (+inItem.weight || 0)\n        Arr[inIndex].length =  (+Arr[inIndex].length || 0) + (+inItem.length || 0)\n    })\n})\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h1",{attrs:{id:"函数的length就是接受参数的个数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数的length就是接受参数的个数"}},[s._v("#")]),s._v(" 函数的length就是接受参数的个数")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("((a, b, c) => {}).length // 3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h1",{attrs:{id:"列表通常会有个全部-这个功能要如何实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列表通常会有个全部-这个功能要如何实现"}},[s._v("#")]),s._v(" 列表通常会有个全部，这个功能要如何实现")]),s._v(" "),a("p",[s._v("每次fetch到数据后，unshift()进一个"),a("code",[s._v("全部")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("this.list = res.data.data\nthis.list.unshift({\n    name: '全部',\n    id: 'all'\n})\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h1",{attrs:{id:"一个组件复用技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个组件复用技巧"}},[s._v("#")]),s._v(" 一个组件复用技巧")]),s._v(" "),a("p",[s._v("通过判断当前的route是哪里过来的，对应做处理。具体案例：页面的新增页和编辑页通常很像，这时就可以利用route判断实现复用。")]),s._v(" "),a("h1",{attrs:{id:"vuex持久化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuex持久化"}},[s._v("#")]),s._v(" vuex持久化")]),s._v(" "),a("p",[s._v("需要借助localstorage")]),s._v(" "),a("h1",{attrs:{id:"v-for-可以遍历对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-for-可以遍历对象"}},[s._v("#")]),s._v(" v-for 可以遍历对象")]),s._v(" "),a("p",[s._v("很多人忽略了这一点。")]),s._v(" "),a("h1",{attrs:{id:"vscode-隐藏提示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vscode-隐藏提示"}},[s._v("#")]),s._v(" vscode 隐藏提示")]),s._v(" "),a("p",[s._v("如图，不想要提示时，按下alt就能隐藏提示内容\n"),a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bbef75c8e19a4f5f822224f138c18f36~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),s._v(" "),a("h1",{attrs:{id:"善用伪元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#善用伪元素"}},[s._v("#")]),s._v(" 善用伪元素")]),s._v(" "),a("p",[s._v("实现类似border的竖线，四角的框线。利用子绝父相实现，注意这里子是伪元素，父是当前元素！")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ab624fcba0944675a595779298bbe42e~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),s._v(" "),a("h1",{attrs:{id:"package-lock-json是否可以删除-【package-lock-json-需要提交到仓库吗-】"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-lock-json是否可以删除-【package-lock-json-需要提交到仓库吗-】"}},[s._v("#")]),s._v(" package.lock.json是否可以删除? 【package-lock.json 需要提交到仓库吗？】")]),s._v(" "),a("p",[s._v("以下摘自https://juejin.cn/post/7137110113277444126 苏苏同学")]),s._v(" "),a("p",[s._v("至于我们要不要提交 "),a("strong",[s._v("lockfiles")]),s._v(" 到仓库中？这个就需要看我们具体的项目的定位了。")]),s._v(" "),a("ol",[a("li",[s._v("如果是开发一个应用, 我的理解是 "),a("code",[s._v("package-lock.json")]),s._v("文件提交到代码版本仓库.这样可以保证项目中成员、运维部署成员或者是 CI 系统, 在执行 "),a("code",[s._v("npm install")]),s._v("后, 保证在不同的节点能得到完全一致的依赖安装的内容，减少"),a("code",[s._v("bug")]),s._v("的出现。")]),s._v(" "),a("li",[s._v("如果你的目标是开发一个给外部环境用的库，那么就需要认真考虑一下了, 因为"),a("strong",[s._v("库文件一般都是被其他项目依赖的，在不使用 package-lock.json的情况下，就可以复用主项目已经加载过的包，减少依赖重复和体积")])]),s._v(" "),a("li",[s._v("如果说我们开发的库依赖了一个精确版本号的模块，那么在我们去提交 "),a("code",[s._v("lockfiles")]),s._v(" 到仓库中可能就会出现, 同一个依赖被不同版本都被下载的情况，这样加大了"),a("code",[s._v("node_modules")]),s._v("的体积。如果我们作为一个库的开发者， 其实如果真的使用到某个特定的版本依赖的需求, 那么定义"),a("strong",[s._v("peerDependencies")]),s._v(" 是一个更好的选择。")])]),s._v(" "),a("p",[s._v("所以, 我个人比较推荐的一个做法是:"),a("code",[s._v("把 package-lock.json")]),s._v("一起提交到仓库中去, 不需要 "),a("code",[s._v("ignore")]),s._v("。但是在执行 "),a("code",[s._v("npm publish")]),s._v(" 命令的时候,也就是发布一个库的时候, 它其实应该是被忽略的不应该被发布出去的。")]),s._v(" "),a("h1",{attrs:{id:"vscode-搜索时-设置大小写很有用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vscode-搜索时-设置大小写很有用"}},[s._v("#")]),s._v(" vscode 搜索时，设置大小写很有用")]),s._v(" "),a("p",[s._v("我在做迁移项目时，同事迁移代码是改了大小写，当时没注意到这个问题，不好找bug。datacollect.js => dataCollect.js\n"),a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/13d4fd5db7124c8abcc8ae350e0494e5~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),s._v(" "),a("h1",{attrs:{id:"css中使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css中使用"}},[s._v("#")]),s._v(" css中使用~@")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d27231d050ce46d9b85fb296e2707ae9~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),s._v(" "),a("h1",{attrs:{id:"typory收费后的替代品-》marktext"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typory收费后的替代品-》marktext"}},[s._v("#")]),s._v(" typory收费后的替代品=》markText")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/qq_44627608/article/details/121734682",target:"_blank",rel:"noopener noreferrer"}},[s._v("(14条消息) Typora免费版，不是破解版，是没有升级的老版本，用的还是比较舒服的_我名异侠的博客-CSDN博客"),a("OutboundLink")],1),s._v(" --“兄弟们0407的可以用”")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/chinayangxiaowei/marktext-chinese-language-pack/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("Releases · chinayangxiaowei/marktext-chinese-language-pack (github.com)"),a("OutboundLink")],1)]),s._v(" "),a("h1",{attrs:{id:"npm-install-安装依赖包-save、-save-dev、-s、-d的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-install-安装依赖包-save、-save-dev、-s、-d的区别"}},[s._v("#")]),s._v(" npm install 安装依赖包 --save、--save-dev、-S、-D的区别")]),s._v(" "),a("p",[s._v("--save-dev：仅开发时用到，打正式包会被去掉=》开发时依赖\n--save：不仅开发，生产环境也需要。开发时和打生产包时都需要=》运行时依赖")]),s._v(" "),a("p",[s._v("详情"),a("a",{attrs:{href:"https://blog.csdn.net/aaqingying/article/details/101371352",target:"_blank",rel:"noopener noreferrer"}},[s._v("(14条消息) npm install 安装依赖包 --save、--save-dev、-S、-D的区别_清颖~的博客-CSDN博客"),a("OutboundLink")],1)]),s._v(" "),a("h1",{attrs:{id:"拉起别人项目-如何能保存时自动使用该项目的eslint规则-以避免提交代码时-pre-commit检测到不符合要求而禁止提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉起别人项目-如何能保存时自动使用该项目的eslint规则-以避免提交代码时-pre-commit检测到不符合要求而禁止提交"}},[s._v("#")]),s._v(" 拉起别人项目，如何能保存时自动使用该项目的eslint规则，以避免提交代码时，pre-commit检测到不符合要求而禁止提交")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    // #每次保存的时候自动格式化\n    // "editor.formatOnSave": true, // 不启用，编辑器格式化的方式可能采取了别的方法=》vetur等\n    // #每次保存的时候将代码按eslint格式进行修复=》读取.eslintrc.js的个性化配置 + eslint原有配置\n    // "eslint.autoFixOnSave": true, // 此配置过时\n    "editor.codeActionsOnSave": {\n        "source.fixAll.eslint": true\n    },\n    // 添加 vue 支持\n    "eslint.validate": [\n        "javascript",\n        "javascriptreact",\n        "vue",\n        // "autoFix": true是默认开启的，不需要下面这样设置\n        // {\n        // "language": "vue",\n        // "autoFix": true\n        // }\n    ]\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a2dfdf703720412982d312e0572cd850~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),s._v(" "),a("h1",{attrs:{id:"浏览器打开新窗口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器打开新窗口"}},[s._v("#")]),s._v(" 浏览器打开新窗口")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    print1() {\n      const { href } = this.$router.resolve({\n        path: '/print-files/oder-plan-v3',\n        query: {\n          test: '555',\n          id: '555587975'\n        }\n      })\n      window.open(href, '_blank')\n    }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h1",{attrs:{id:"vue2-实现定时缓存数据。当用户输入数据了-此时页面刷新-仍能看到用户刚刚输入的数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue2-实现定时缓存数据。当用户输入数据了-此时页面刷新-仍能看到用户刚刚输入的数据"}},[s._v("#")]),s._v(" vue2 实现定时缓存数据。当用户输入数据了，此时页面刷新，仍能看到用户刚刚输入的数据")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("created() {\n    const data = window.localstorage.getItem('testData')\n    if(data) {\n        Object.assign(this, data)\n    }\n    setInterval(_ => {\n        window.localstorage.setItem('testData', JSON.stringify(this)\n    })\n},\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h1",{attrs:{id:"接手了同事代码-同事代码线上有bug-本地如何debug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接手了同事代码-同事代码线上有bug-本地如何debug"}},[s._v("#")]),s._v(" 接手了同事代码，同事代码线上有bug，本地如何debug")]),s._v(" "),a("p",[s._v("可以利用sourceMap，修改值，实现bug精确定位。")]),s._v(" "),a("p",[s._v("为啥有这个想法，是因为又有一次，接手的同事代码报错，浏览器只提示id是undefined，去报错页面一搜，发现用的地方还挺多。")]),s._v(" "),a("h1",{attrs:{id:"接手了同事代码-要修改、添加新功能-如何避坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接手了同事代码-要修改、添加新功能-如何避坑"}},[s._v("#")]),s._v(" 接手了同事代码，要修改、添加新功能，如何避坑")]),s._v(" "),a("h2",{attrs:{id:"数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[s._v("#")]),s._v(" 数组")]),s._v(" "),a("p",[s._v("数组用splice等方法，不要JSON.parse(JSON.stringify(xx))去修改引用。对象同理。")]),s._v(" "),a("h2",{attrs:{id:"加备注"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加备注"}},[s._v("#")]),s._v(" 加备注")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 2.3.0 新增 start\n// 2.3.0 新增 end\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"特殊条件下才有的内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特殊条件下才有的内容"}},[s._v("#")]),s._v(" 特殊条件下才有的内容")]),s._v(" "),a("p",[s._v("vif可插拔")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('v-if="isAgent"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"善用数组的reduce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#善用数组的reduce"}},[s._v("#")]),s._v(" 善用数组的reduce")]),s._v(" "),a("p",[s._v("求和。此外，提示下，数组reduce后可以返回对象、数组。")])])}),[],!1,null,null,null);a.default=n.exports}}]);