<template>
    <div class="car">
        <h3>Name: {{carName}} / {{reverseName}}</h3>
        <p>Year: {{carYear}}</p>
        <button @click="changeName()">Change name</button>
        <button @click="changeFunc()">Change from parent</button>

    </div>
</template>

<script>
    export default {
        props: {
            carName: {
                type: String,
                //required: true,
                default: 'Default car'
            },
            carYear: Number,
            changeFunc: Function
        },
        methods: {
            changeName: function () {
                this.carName = 'Mazda'
                //Создаем событие nameChanged и передаем в него параметр
                this.$emit('nameChanged', this.carName)
            }
        },
        computed: {
            reverseName: function () {
                return this.carName.split('').reverse().join('')
            }
        },

        name: "Car",
        data() {
            return {
                //carYear: 2015
            }
        }
    }
</script>
<style>
    .car {
        border: 1px solid black;
    }

    .car h3 {
        margin-bottom: 5px;
    }

</style>