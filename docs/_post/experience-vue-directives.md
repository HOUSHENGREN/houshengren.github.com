---
date: 2023-08-16
title: vue2自定义指令的实现
category: experience
cover: /mdImages/025.webp
tags:
  - Vue
  - JavaScript
---

## 自定义指令的概念理解

vue2指令有四个钩子函数，分别是inserted、update、componentUpdated、bind、unbind。官方的解释有点不大好理解，我类比一下，大家就容易懂了。

~~~
inserted => mounted
bind => created
unbind => beforeDestroy
update => 当前节点更新时
componentUpdated => 当前节点及其子节点全部更新完成时调用
~~~

五个函数分别可接受el、binding、vnode、oldVnode四个入参，oldVnode是只有update、componentUpdated函数才有的入参。

vnode.context，可以拿到当前组件实例，v-model底层实现就是利用了这个去修改当前实例的参数。

## v-myModel的实现

以下来实现一下双向绑定，只考虑input，不考虑其他表单组件

~~~
<template>
  <input v-myModel="input" />
</template>

<script>
export default {
  name: 'App',
  directives: {
    myModel: {
      bind(el, binding, vnode) {
        console.log('kjlkkj', binding.value);
        el.value = binding.value;
        el.addEventListener('input', function () {
          vnode.context[binding.expression] = this.value;
        });
      },
      update(el, binding) {
        el.value = binding.value;
      },
    },
  },
  data() {
    return {
      input: '222',
    };
  },
};
</script>
~~~

指令还分全局与局部，只是注册的位置不同，此处省略。

我多举几个常用的例子。

## v-permission的实现

实现v-permission指令。实现这一指令，可以在用户登录时，请求一次用户的权限fetchPermissions，存到localstorage，这样就方便指令去拿权限信息了。绑定的指令先判断当前绑定权限是否包含，没有则隐藏，当然处理隐藏还可以做其它处理，比如禁止点击。另外，绑定的值的类型可以做个判断，兼容下，传入数组的情况。

~~~
permisson: {
  inserted(el, binding) {
    let val = binding.value
    if(binding.value) {
      // 这里的用户权限是从接口返回
      let fetchPermissions = ['add', 'delete', 'fix']
      let hasPer = fetchPermissions.some(i => i === val)
      // 没权限则隐藏
      if(!hasPer) el.style.display = 'none'
    }
  }
}
~~~

## v-empty的实现

实现v-empty指令，假设需要接受图片地址、文字信息，这样我们就需要创建跟真实节点插入到当前节点，那么这个要怎么创建真实节点呢？在vue2里面可以借助Vue.extend()得到vue组件，在利用$mount().$el()得到真实节点。明白了这点，下面我们来实现一遍。

~~~
empty: {
  update(el, binding, vnode) {
    // 子绝父相 + 居中
    el.style.position = el.style.position || 'relative'
    const { offsetHeight, offsetWidth } = el
    const { visible, content, img } = binding.value
    const image = img ? `<img src="${img}" height='30%' width="30%"/>` : ''
    const defaultStyle = "position: absolute;top:0;left:0;z-index:9999;background:#fff;display:flex;align-items:center;justify-content:center;"
    const empty = Vue.extend({
      template: `<div style='height: ${offsetHeight}px;width:${offsetWidth}px;${defaultStyle}'>
        <div style='text-align:center'>
          <div>
            ${image}
          </div>
          <div>
            ${content || '暂无数据'}
          </div>
        </div>
      </div>
      `
    })
    const component = new empty().$mount().$el
    visible ? el.appendChild(component) : el.removeChild(el.lastChild)
  }
}
~~~

删除子元素使用了`el.removeChild(el.lastChild)`，不会有太大问题，当前节点下只可能是我传入的img节点。这里要更严谨点，可能innerHtml = ''更好。实际使用时，优化下即可。

## v-preventReClick的实现

该指令的作用是为了防止频繁点击按钮导致请求频繁，优化下，可以做成类似于防抖/节流的功能。根据当前按钮是否disabled来决定是否让用户能点击。

~~~
preventReClick: {
  inserted(el, binding, vnode) {
    el.addEventListener('click', function() {
      if(!el.disabled) {
        el.disabled = true
        setTimeout(() => { el.disabled = false }, binding.value || 2000)
      }
    })
  }
}
~~~

## 结语

vue指令的更多实现，可参考[Vue-Demo-Collection](https://gesj-yean.github.io/vue-demo-collection/base/directive/empty.html)





