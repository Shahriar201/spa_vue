import Vue from 'vue';
import routes from './router/index';
require('./bootstrap');
// import { Form, HasError, AlertError } from 'vform'

// Vue.component(HasError.name, HasError)
// Vue.component(AlertError.name, AlertError)

Vue.component('app-hearder', require('./components/Header.vue').default);


const app = new Vue({
    el: '#app',
    router: routes,
});