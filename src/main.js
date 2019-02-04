import Vue from 'vue'
import App from './App.vue'

export const eventEmitter = new Vue() //Шина событий

new Vue({
    el: '#app',
    render: h => h(App)

})