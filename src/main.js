import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/iconfont/font_img/iconfont.css'
import './assets/css/global.css' // 引入全局样式
import echarts from 'echarts'
import { pcaa } from 'area-data-vue'
import 'area-linkage-vue/dist/index.css'
import VueAreaLinkage from 'area-linkage-vue'
import BaiduMap from 'vue-baidu-map'

Vue.use(VueAreaLinkage)
Vue.use(BaiduMap, {
  ak: 'D4miYGpflxdytYDM09CUI4mbzoprSTYs'
})

Vue.prototype.$pcaa = pcaa
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
