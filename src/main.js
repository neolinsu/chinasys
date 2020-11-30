import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'

import HomePage from './components/HomePage'
import Committee from './components/Committee'
import TBD from './components/TBD'
import Hotel from './components/Hotel'
import Program from './components/Program'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: HomePage },
  { path: '/committee', component: Committee },
  { path: '/tbd', component: TBD },
  { path: '/hotel', component: Hotel },
  { path: '/program', component: Program}
]
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router
}).$mount('#app')
