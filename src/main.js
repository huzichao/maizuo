import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

//导入axios
import axios from '@/api/http'
// 需要将对应的内容挂在到vue的原型对象上（后续不用每次都import）
Vue.prototype.$http = axios;

// 事件中心的定义
Vue.prototype.$eventBus = new Vue();

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
