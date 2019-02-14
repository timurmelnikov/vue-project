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
    export default {
        data() {
            return {
                title: 'Hello I am a Vue!',
                names: ['Vlad', 'Max', 'Elena', 'Igor'],
                searchName: ''
            }
        },
        filters: {
            lowercase(value) {
                return value.toLowerCase()
            }
        },
        computed: {
            filtredNames() {
                return this.names.filter(name => {
                    return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
                })
            }
        }
    }
</script>

<style scoped>
</style>


