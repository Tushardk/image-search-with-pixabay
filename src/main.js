import Vue from 'vue'
import App from './App.vue'
import store from './store/store.js'

Vue.config.productionTip = false;
Vue.config.silent = true;


new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
