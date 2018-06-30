import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'

import msToMm from '@/filters/ms-to-mm.js'

import routes from '@/routes.js'

import EventBus from '@/plugins/event-bus.js'

Vue.use(VueRouter)
Vue.use(EventBus)
Vue.use(msToMm)

const router = new VueRouter({ routes: routes, mode: 'history' })

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
