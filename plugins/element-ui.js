/**
 * plugins 作为全局注入的主要途径，关于一些使用的方式是必须要掌握的。
 * 有时你希望在整个应用程序中使用某个函数或属性值，
 * 此时，你需要将它们注入到 Vue 实例（客户端）， context （服务器端）甚至 store(Vuex) 。
 *
 * plugin 一般向外暴露一个函数，该函数接收两个参数分别是 context 和 inject
      context： 上下文对象，该对象存储很多有用的属性。比如常用的 app 属性，包含所有插件的 Vue 根实例。
      例如：在使用 axios 的时候，你想获取 $axios 可以直接通过 context.app.$axios 来获取。
      inject： 该方法可以将 plugin 同时注入到 context， Vue 实例， Vuex 中。

*/

import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(Element, { locale })
