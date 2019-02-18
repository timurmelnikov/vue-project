<template>
    <div>
        <h2>Form inputs</h2>
        <select v-model="social">
            <option
                    v-for="s in socialsList"
              >{{s}}</option>
        </select>
        <hr>
        <p>{{social}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                defaultSocial: 'vk',
                social:'instagram',
                socialsList: ['instagram','facebook', 'vk']

            }
        }
    }
</script>

<style scoped>

</style>


