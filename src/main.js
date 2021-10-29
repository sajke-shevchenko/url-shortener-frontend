import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Notifications from 'vue-notification';
import {BootstrapVue} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueFilterDateFormat from 'vue-filter-date-format';
import vuetify from './plugins/vuetify'


Vue.config.productionTip = false
Vue.use(Vuetify);
Vue.use(BootstrapVue)
Vue.use(Notifications)
Vue.use(VueFilterDateFormat);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
