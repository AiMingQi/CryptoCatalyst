import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vuetify/dist/vuetify.min.css' 
// index.js or main.js
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(VueAnalytics, {
  id: 'UA-127962875-1'
})

Vue.use(Vuetify, {
  theme: {
    primary: '#FF9F00',
    secondary: '#033E22'
  }
})

Vue.use(require('vue-moment'));

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
