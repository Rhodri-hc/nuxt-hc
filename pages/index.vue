<template>
  <Tutorial />
</template>

<script>
export default {
  name: 'IndexPage'
  // validate({ params, query }) {
  //   return this.methods.validateParam(params.type)
  // },
  // 一般主要数据通过 asyncData (该生命周期发起请求，将获取到的数据交给服务端拼接成html返回) 去提前请求做服务端渲染，而次要数据通过客户端的 mounted 去请求。
  // error 该方法跳转到错误页。
  // async asyncData ({ app, store, params, query, error }) {
  //   const list = await app.$axios.getIndexList({
  //     id: params.id,
  //     pageNum: 1,
  //     pageSize: 20
  //   }).then(res => res.s === 1 ? res.d : [])
  //   // 服务端使用
  //   store.commit('updateList', list)
  //   return {
  //     list
  //   }
  // },
  // fetch ({ store, params }) {
  //   return axios.get('http://my-api/stars')
  //   .then((res) => {
  //     store.commit('setStars', res.data)
  //   })
  // }
  // head () {
  //   return {
  //     title: this.articInfo.title,
  //     meta: [
  //       { hid: 'description', name: 'description', content: this.articInfo.content }
  //     ]
  //   }
  // }
  // watchQuery: ['keyword', 'type', 'period'],
  // data() {
  //   return {
  //     list: [],
  //     categories: []
  //   }
  // },
  // async mounted() {
  //   // 分类
  //   let res = await this.$axios.getCategories()
  //   if (res.s  === 1) {
  //     this.categories = res.d
  //   }
  // }
  //   methods: {
  //   updateList(list) {
  //     // 客户端使用，当然你也可以使用辅助函数 mapMutations 来完成
  //     this.$store.commit('updateList', list)
  //   },
  // validateParam(type){
  //     let typeWhiteList = ['backend', 'frontend', 'android']
  //     return typeWhiteList.includes(type)
  //   },
  // search(item) {
  //     // 更新路由参数，触发 watchQuery，执行 asyncData 重新获取数据
  //     this.$router.push({
  //       name: 'search',
  //       query: {
  //         type: item.type || this.type,
  //         keyword: this.keyword,
  //         period: item.period || this.period
  //       }
  //     })
  //   }
  // }
  /**
   * Nuxt常用页面生命周期
   * asyncData: Nuxt.js添加了asyncData方法使得你能够在渲染组件之前异步获取数据。
   * fetch: fetch 方法用于在渲染页面前填充应用的状态树（store）数据， 与 asyncData 方法类似，不同的是它不会设置组件的数据。
   * validate: Nuxt.js 可以让你在动态路由对应的页面组件中配置一个校验方法用于校验动态路由参数的有效性。
   *           生命周期可以返回一个 Boolean，为真则进入路由，为假则停止渲染当前页面并显示错误页面
   *           或者返回一个Promise，还可以在验证函数执行期间抛出预期或意外错误
   * watchQuery：监听参数字符串更改并在更改时执行组件方法 (asyncData, fetch, validate, layout, ...)
   * head： Nuxt.js 使用了 vue-meta 更新应用的 头部标签(Head) 和 html 属性
   *
   * 生命周期的调用顺序： validate  =>  asyncData  =>  fetch  =>  head
  */

}
</script>
