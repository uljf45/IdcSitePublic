import Vue from 'vue'
import App from './cloud.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#index')
