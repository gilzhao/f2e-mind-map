import App from './App.vue'
import Vue from 'vue'

// 创建 Vue 实例的部分改写一个工厂函数，用于创建返回 Vue 实例
export function createApp() {
  const app = new Vue({
    el: '#app',
    render: h => h(App)
  })

  return app
}