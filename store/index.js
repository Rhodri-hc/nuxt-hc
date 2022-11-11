export const state = () => ({
  list: []
})

export const mutations = {
  updateList (state, payload) {
    state.list = payload
  }
}
/**
 * 为了明白 store 注入的过程，我翻阅 .nuxt/index.js 源码（.nuxt 目录是 Nuxt.js 在构建运行时自动生成的），大概知道了流程。
 * 首先在 .nuxt/store.js 中，对 store 模块文件做出一系列的处理，并暴露 createStore 方法。
 * 然后在 .nuxt/index.js 中，createApp方法会对其同时注入
*/
