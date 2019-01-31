<template>
    <div id="app">
        <h1>Parent: {{ carName }}</h1>
        <app-car
                :carName="carName"
                :carYear="carYear"
                :changeFunc="changeNameToAudi"
                @nameChanged="carName = $event"
        ></app-car>
    </div>
</template>

<script>
    import Car from './Car.vue'

    export default {
        name: 'app',
        data() {
            return {
                carName: 'Ford',
                carYear: 2002
            }
        },
        methods:{
            changeNameToAudi:function () {
                this.carName = 'Audi'
                
            }
        },
        components: {
            appCar: Car
        }
    }
</script>


