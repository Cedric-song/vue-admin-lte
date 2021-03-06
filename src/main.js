require('./bootstrap')

import Vue from 'vue'
import App from './App'

// Plugins
import router from './router'

/* eslint-disable no-new */
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
