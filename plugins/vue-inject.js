/**
 * 注入 Vue 实例
*/
import Vue from 'vue'

Vue.prototype.$myInjectedFunction = string => console.log('This is an example', string)
