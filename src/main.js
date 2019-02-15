import Vue from 'vue'
import App from './App.vue'
import List from './List.vue'

Vue.filter('uppercase', (value) => value.toUpperCase())

Vue.component('app-list', List)

Vue.mixin({
    beforeCreate() {
        console.log('beforeCreate из глобального Миксина')
    }
})

new Vue({
    el: '#app',
    render: h => h(App)
})