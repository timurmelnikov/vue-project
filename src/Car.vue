<template>
    <div class="car">
        <h3>Name: {{carName}} / {{reverseName}}</h3>
        <p>Year: {{carYear}}</p>

    </div>
</template>

<script>
    export default {
         //1-й вариант
        //props: ['carName', 'carYear'],

        //2-й вариант
        // props:{
        //     carName: String,
        //     carYear: Number
        // },

        //3-й вариант
        props: {
            carName: {
                type: String,
                //required: true,
                default: 'Default car'
            },
            carYear: Number
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