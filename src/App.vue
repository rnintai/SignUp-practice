<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <button v-if="isLogin" @click="logOut">Log Out</button>
      <router-link v-else to="/login">LogIn</router-link> |
      <router-link to="/SignUp">SignUp</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "app",
  computed: {
    ...mapState(["userInfo", "isLogin"]),
  },
  methods: {
    ...mapActions(["logOut"]),
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
