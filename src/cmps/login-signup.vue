<template>
  <section class="login-signup">
    <div v-if="user" class="flex align-center">
      <p>hello : {{ user.fullname }}</p>
      <p>{{ user.balance }}$</p>
      <button class="btn" @click="onLogout">logout</button>
    </div>
    <section class="flex align-center" v-if="!user">
      <p>
        <button class="btn" @click="isSignup = !isSignup">
          {{ toggleBtnTxt }}
        </button>
      </p>
      <form
        v-if="isSignup"
        class="flex align-center"
        @submit.prevent="onSignup"
      >
        <input
          type="text"
          v-model="credentials.fullname"
          placeholder="full name ..."
        />
        <input
          type="text"
          v-model="credentials.username"
          placeholder="user name ..."
        />
        <input
          type="password"
          v-model="credentials.password"
          placeholder="password ..."
        />
        <button class="btn">SignUp</button>
      </form>
      <form
        class="flex align-center gap-5"
        v-if="!isSignup"
        @submit.prevent="onLogin"
      >
        <input
          placeholder="user name ..."
          type="text"
          v-model="credentials.username"
        />
        <input
          placeholder="password ..."
          type="password"
          v-model="credentials.password"
        />
        <button class="btn">login</button>
      </form>
    </section>
  </section>
</template>

<script>
import { userService } from "../services/user.service";
export default {
  data() {
    return {
      isSignup: false,
      credentials: { username: "", password: "", fullname: "" },
      user: userService.getLoggedinUser(),
      isSignup: false,
    };
  },
  methods: {
    async onLogin() {
      if (!this.credentials.username) return;
      await userService.login(this.credentials);
      this.user = await userService.getLoggedinUser();
      this.clearCredentials();
    },

    async onSignup() {
      console.log("this.credentials:", this.credentials);
      if (
        !this.credentials.username ||
        !this.credentials.password ||
        !this.credentials.fullname
      )
        return;
      await userService.signup(this.credentials);
      this.user = await userService.getLoggedinUser();
      this.clearCredentials();
    },
    onLogout() {
      userService.logout();
      this.user = null;
    },
    clearCredentials() {
      this.credentials = { username: "", password: "", fullname: "" };
    },
  },
  computed: {
    toggleBtnTxt() {
      return !this.isSignup ? "signup" : "login";
    },
  },
};
</script>

