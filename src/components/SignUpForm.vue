<template>
  <div class="SignUpForm">
    <div class="email">
      <label for="user-email">E-mail: </label>
      <input type="text" class="user-email" v-model="email" />
    </div>
    <div class="password">
      <label for="user-password">Password: </label>
      <input type="text" class="user-password" v-model="password" />
    </div>
    <div class="password-confirm">
      <label for="user-password-confirm">Confirm Password: </label>
      <input type="text" class="user-password-confirm" v-model="pw_confirm" />
    </div>
    <div class="name">
      <label for="user-name">Name: </label>
      <input type="text" class="user-name" v-model="name" />
    </div>
    <button class="sign-up-btn" @click="signup_click">Sign Up!</button>
  </div>
</template>

<script>
export default {
  name: 'SignUpForm',
  data: () => ({
    email: null,
    password: null,
    pw_confirm: null,
    name: null,
  }),
  methods: {
    signup_click() {
      // console.log(this.email);
      // console.log(this.password);
      // console.log(this.pw_confirm);
      // console.log(this.name);
      this.clear_form();
    },
    clear_form() {
      // this.email = null;
      // this.password = null;
      // this.pw_confirm = null;
      // this.name = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.SignUpForm {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: baseline;
  width: 70%;
  margin: 0 auto;
  .email,
  .password,
  .password-confirm,
  .name,
  .sign-up-btn {
    position: relative;
    left: 37%;
    margin-bottom: 50px;
  }
}
</style>
