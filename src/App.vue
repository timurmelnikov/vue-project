<template>
    <div>
        <h2 v-colored:background.font="'red'">{{title}}</h2>
        <h2 v-colored:color.delay="'blue'">{{title}}</h2>
        <h2 v-font>Local font directive</h2>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Hello I am a Vue!'
            }
        },
        directives: {
            font: {
                bind(el, bindings, vnode) {
                    el.style.fontSize = '100px'
                }
            }
        }
    }
</script>

<style scoped>
</style>


