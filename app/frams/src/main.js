import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import vuetify from './plugins/vuetify'
import VueMaterial from 'vue-material'

Vue.use(VueMaterial)
Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
