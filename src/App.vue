<template>
    <div>
        <h2>Form inputs</h2>
        <label>
            <input v-model="social" type="checkbox" value="instagram">
            Instagram
        </label>
        <label>
            <input v-model="social" type="checkbox" value="vk">
            Vk
        </label>
        <label>
            <input v-model="social" type="checkbox" value="facebook">
            Facebook
        </label>

        <hr>
        <ul>
            <li v-for="val in social">{{val}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                social: ['vk']

            }
        }
    }
</script>

<style scoped>

</style>


