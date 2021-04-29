import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null,
    allUsers: [
      {
        id: 1,
        // name: "rnintai",
        email: "ho46825@gmail.com",
        password: "102938",
      },
    ],
    isLogin: false,
    isLoginError: false,
  },

  mutations: {
    loginSuccess(state, payload) {
      state.isLogin = true;
      state.isLoginError = false;
      state.userInfo = payload;
    },
    loginError(state) {
      state.isLogin = false;
      state.isLoginError = true;
    },
    logOut(state) {
      state.isLogin = false;
      state.isLoginError = false;
      state.userInfo = null;
    },
  },
  actions: {
    //eve.holt@reqres.in cityslicka
    login({ dispatch }, loginObj) {
      // 로그인 -> 토큰 반환
      axios
        .post("https://reqres.in/api/login", loginObj)
        .then((res) => {
          // 성공시 토큰 반환
          // 토큰을 헤더에 포함시켜서 get으로 유저 정보 요청
          let token = res.data.token;
          // 로컬 스토리지에 저장
          localStorage.setItem("access_token", token);
          dispatch("getMemberInfo");
        })
        .catch(() => {
          alert("이메일과 비밀번호를 확인하세요.");
        })
        .finally(() => {
          router.push("/");
        });
    },
    logOut({ commit }) {
      commit("logOut");
      router.push("/");
    },
    getMemberInfo({ commit }) {
      let token = localStorage.getItem("access_token");
      let config = {
        headers: {
          access_token: token,
        },
      };
      axios
        .get("https://reqres.in/api/users/2", config)
        .then((response) => {
          let userInfo = {
            id: response.data.data.id,
            first_name: response.data.data.first_name,
            last_name: response.data.data.last_name,
            avatar: response.data.data.avatar,
          };
          commit("loginSuccess", userInfo);
        })
        .catch(() => {
          alert("이메일과 비밀번호를 확인하세요.");
        });
    },
  },
  modules: {},
});
