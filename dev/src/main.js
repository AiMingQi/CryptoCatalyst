import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import ability from './ability'
import { abilitiesPlugin } from '@casl/vue'

import 'vuetify/dist/vuetify.min.css' 
import './style/site.css'

// index.js or main.js
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(abilitiesPlugin, ability)

// TODO: the next line is added for debugging purposes and should be removed for production build
window.ability = ability

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
