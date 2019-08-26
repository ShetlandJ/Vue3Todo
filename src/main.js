import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import vuetify from './plugins/vuetify';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from './store/index';
import router from './router/router';
import VueCompositionApi from '@vue/composition-api';

Vue.use(VueCompositionApi);
Vue.use(Vuetify)
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  store,
  router,
}).$mount('#app')
