import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/global.css' // 引入全局样式
import echarts from 'echarts'
// eslint-disable-next-line no-unused-vars
// import china from 'echarts/map/json/china.json'
import { pcaa } from 'area-data-vue'
import 'area-linkage-vue/dist/index.css'
import VueAreaLinkage from 'area-linkage-vue'

Vue.use(VueAreaLinkage)

Vue.prototype.$pcaa = pcaa
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
