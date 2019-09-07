<template>
  <div id="app">
    <DataTable msg="Welcome to My dataTable App"/>
   <!-- <router-view /> -->
  </div>
</template>

<script>
import DataTable from './components/DataTable.vue'
import User from './views/User.vue'

export default {
  name: 'app',
  components: {
    DataTable,
    User
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
