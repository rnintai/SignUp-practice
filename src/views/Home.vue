<template>
  <div class="home">
    <div v-if="isLogin">
      {{ userInfo.first_name }} {{ userInfo.last_name }}님의 마이페이지
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {},
  computed: {
    ...mapState(["userInfo", "isLogin"]),
  },
};
</script>
