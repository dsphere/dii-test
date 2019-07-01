<template>
  <v-app id="app">
    <Interface/>
  </v-app>
</template>

<script>

  import Interface from './components/Interface.vue';

  export default {
    name: "app",
    components: {
      Interface
    }
  };
</script>

<style lang="scss">

  #app {
    align-items: center;
    color: #2c3e50;
    background-color:  #daf6ac;
    display: flex;
    font-family: "Roboto", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

</style>
