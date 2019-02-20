<template>
    <div class="container">
        <form class="pt-3">
            <div class="form-group">
                <label for="email">Email</label>
                <input
                        class="form-control"
                        id="email"
                        type="email"
                        v-model="email"
                >
            </div>
        </form>
        <p>{{email}}</p>
    </div>

</template>

<script>
    export default {
        data(){
            return{
                email:''

            }
        }
    }


</script>

<style scoped>

</style>


