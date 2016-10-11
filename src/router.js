import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Components
import Home from './components/Home'

const router = new VueRouter({
  routes: [
    { path: '/', component: Home }
  ]
})

export default router
