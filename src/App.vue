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
    </div>
</template>

<script>
    export default {
        data() {
            return {
                carName: '',
                carYear: 2018
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
            }
        }
    }
</script>

<style>

</style>
