import Vue from 'vue'
import App from './App.vue'
import { bus } from './plugins/event-bus'

Vue.config.productionTip = false;

Vue.use(bus);

new Vue({
  render: h => h(App),
}).$mount('#app');
