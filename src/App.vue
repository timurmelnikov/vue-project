<template>
    <div id="container зе-2">
        <div class="form-group">
            <label for="name">Car name</label>
            <input id="name" class="form-control" type="text" v-model.trim="carName">
        </div>
        <div class="form-group">
            <label for="year">Car name</label>
            <input id="year" class="form-control" type="text" v-model.number="carYear">
        </div>
        <button class="btn btn-success" @click="createCar">Create</button>
        <button class="btn btn-primary" @click="loadCars">Load Cars</button>
        <hr>
        <ul class="list-group">
            <li c
                lass="list-group-item"
                v-for="car of cars"
                :key="car.id"
            >
                <strong>{{car.name}}</strong> - {{car.year}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                carName: '',
                carYear: 2018,
                cars:[]
            }
        },
        methods: {
            createCar() {
                const car = {
                    name: this.carName,
                    year: this.carYear
                }
                this.$http.post('http://localhost:3000/cars', car)
                    .then(response => {
                        //console.log(response)
                        return response.json()
                    })
                    .then(newCar => {
                        console.log(newCar)
                    })
            },
            loadCars(){
                this.$http.get('http://localhost:3000/cars')
                    .then(response => {
                        return response.json()
                    })
                    .then(cars => {
                        this.cars = cars
                        //console.log(cars)
                    })

            }
        }
    }
</script>

<style>

</style>
