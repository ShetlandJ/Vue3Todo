import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import vuetify from './plugins/vuetify';
import { plugin } from 'vue-function-api'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from './store/index';
import router from './router/router';

Vue.use(plugin)
Vue.use(Vuetify)
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  store,
  router,
}).$mount('#app')
