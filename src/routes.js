import VueRouter from 'vue-router'
import Home from './pages/Home'
import Cars from './pages/Cars'

export default new VueRouter({
    routes: [
        {
            path: '', //http://localhost:8080
            component: Home
        },

        {
            path: '/cars', //http://localhost:8080/cars
            component: Cars
        },
    ],
    mode: 'history' //Избавляемся от # в адресе

})