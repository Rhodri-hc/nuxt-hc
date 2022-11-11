/**
 * 如果需要同时在 context ， Vue 实例，甚至 Vuex 中同时注入，
 * 可以使用 inject 方法，它是 plugin 导出函数的第二个参数。系统会默认将 $ 作为方法名的前缀。
*/

export default ({ app }, inject) => {
  inject('myInjectedFunction', string => console.log('That was easy!', string))
}
