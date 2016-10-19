import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Components
import Home from './components/Home'
import Dashboard2 from './components/Dashboard2'
import Widgets from './components/Widgets'
import Charts from './components/Charts'


const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/dashboard2', component: Dashboard2 },
    { path: '/widgets', component: Widgets },
    { path: '/charts', component: Charts }
  ]
})

export default router
