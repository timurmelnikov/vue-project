<template>
    <div>
        <h2>Form inputs</h2>
        <label>
            <input v-model="social" type="radio" value="instagram">
            Instagram
        </label>
        <label>
            <input v-model="social" type="radio" value="vk">
            Vk
        </label>
        <label>
            <input v-model="social" type="radio" value="facebook">
            Facebook
        </label>

        <hr>
        <p>{{social}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                social: 'facebook'

            }
        }
    }
</script>

<style scoped>

</style>


