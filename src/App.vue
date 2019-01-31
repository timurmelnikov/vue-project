<template>
    <div id="app">
        <h1>Parent: {{ carName }}</h1>
        <app-car
                :carName="carName"
                :carYear="carYear"
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
        components: {
            appCar: Car
        }
    }
</script>


