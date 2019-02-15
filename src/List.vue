<template>
    <div>
        <h2>{{title}}</h2>
        <input type="text" v-model="searchName">
        <ul>
            <li v-for="name of filtredNames">{{name}}</li>
        </ul>
    </div>
</template>

<script>
    import ListMixin from './listMixin.js'
    export default {
        data(){
            return {
                title: 'List',
            }
        },
        mixins: [ListMixin]
    }
</script>

<style scoped>

</style>