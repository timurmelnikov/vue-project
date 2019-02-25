import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(Vuelidate, VueRouter)

new Vue({
    el: '#app',
    render: h => h(App)
})