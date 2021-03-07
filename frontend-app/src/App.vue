<template>
  <div id="app">
<!-- <b-container class="container-fluid h-100">
  <b-row>
    <b-col class="col-md-3 no-float">Picture</b-col>
    <b-col>2 of 3</b-col>
  </b-row>
</b-container> -->
    <router-view></router-view>
    <!-- <login-form></login-form> -->
  </div>
</template>

<script>

import LoginForm from "./components/LoginForm.vue";

export default {
  name: "app",
  components: {
    "login-form": LoginForm,
  },
  data() {
    return {
      msg: "Welcome to SkoolBoekie",
    };
  },
};
</script>

<style lang="scss">
 #app {
   font-family: "Avenir", Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 250px;
 }

h1 {
  font-weight: normal;
}
</style>
