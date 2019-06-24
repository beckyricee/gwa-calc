import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store/store'
import EventBus from './eventbus'
import './registerServiceWorker'
import './components'

// Custom filters for grades and averages
Vue.filter('asGrade', (value?: number) => {
  if (value === undefined) {
    return '1.00'
  } else {
    return value.toFixed(2)
  }
})
Vue.filter('asAverage', (value?: number) => {
  if (value === undefined) {
    return '1.000'
  } else {
    return value.toFixed(6).substring(0, 5)
  }
})

// Event bus
Vue.use(EventBus)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
