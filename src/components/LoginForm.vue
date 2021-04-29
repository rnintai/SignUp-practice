<template>
  <div class="LoginForm">
    <div class="email">
      <label for="user-email">E-mail: </label>
      <input type="text" class="user-email" v-model="email" />
    </div>
    <div class="password">
      <label for="user-password">Password: </label>
      <input type="text" class="user-password" v-model="password" />
    </div>
    <button
      class="login-btn"
      @click="
        login({
          email,
          password,
        })
      "
    >
      Log in!
    </button>
    <!-- <button class="login-btn" @click="post_test">POST test</button> -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "LoginForm",
  data: () => ({
    email: null,
    password: null,
  }),
  computed: {
    ...mapState(["isLogin"]),
  },
  methods: {
    ...mapActions(["login"]),
  },
};
</script>

<style lang="scss" scoped>
.LoginForm {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: baseline;
  width: 70%;
  margin: 0 auto;
  .email,
  .password,
  .login-btn {
    position: relative;
    left: 37%;
    margin-bottom: 35px;
  }
}
</style>
