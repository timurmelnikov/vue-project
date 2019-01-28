<template>
  <div id="app">

    <h1>{{ msg }}</h1>
<app-car></app-car>
  </div>
</template>

<script>
import Car from './Car.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome'
    }
  },
  components:{
    appCar: Car
  }
}
</script>


