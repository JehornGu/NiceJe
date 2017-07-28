<template>
  <div id="app">
    <img src="./assets/logo_03.png" height="63" width="117">
    <login-in></login-in>
    <a href="index.html">index</a>
  </div>
</template>

<script>
import LoginIn from './components/pages/login-in.vue'

export default {
  name: 'app-login',
  components: {
    LoginIn
  }
}
</script>

<style lang="less" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
