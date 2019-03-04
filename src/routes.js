import VueRouter from 'vue-router'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Car from './pages/Car'
import ErrorCmp from './pages/Error'
import CarFull from './pages/CarFull'

export default new VueRouter({
    routes: [
        {
            path: '', //http://localhost:8080
            component: Home
        },

        {
            path: '/cars', //http://localhost:8080/cars
            component: Cars,
            name: 'cars'
        },

        {
            path: '/car/:id',
            component: Car,
            children: [{
                path: 'full', //http://localhost:8080/car/3/full
                component: CarFull,
                name: 'carFull',
                beforeEnter (to, from, next) {
                    console.log('beforeEnter')
                    if(true){
                        next(true)
                    } else {
                        next(false)
                    }
                }
            }]
        },
        {
            path: '/none',
            //redirect: '/cars'
            redirect: {
                name: 'cars'
            }
        },
        {
            path: '*',
            component: ErrorCmp

        }
    ],
    mode: 'history', //Избавляемся от # в адресе
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        if (to.hash) {
            return {selector: to.hash}
        }
        return {
            x: 0,
            y: 0
        }
    }
})