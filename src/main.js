import Vue from 'vue'
import App from './App.vue'

new Vue({
    el: '#app',
    render: h => h(App)
    /* 2-й вариант. Почему-то не работает...
    render: function (h) {
        h(App)
    }
    */
})
