// context 注入方式和在其它 vue 应用程序中注入类似。

export default ({ app }) => {
  app.myInjectedFunction = string => console.log('Okay, another function', string)
}
