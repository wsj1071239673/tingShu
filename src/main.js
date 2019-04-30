import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router/index'


// 引入reset.css
import './assets/css/reset.css'
import './assets/css/base.css'
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
