import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import vuetify from './plugins/vuetify'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
/*import 'vue-material/dist/theme/default-dark.css'*/

Vue.use(Buefy)
Vue.use(VueMaterial)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
