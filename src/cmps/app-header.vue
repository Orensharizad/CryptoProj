<template>
  <header>
    <div class="flex align-center gap-15">
      <img class="logo" src="../assets/imgs/main-logo.webp" alt="" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/contact">Contacts</RouterLink>
        <RouterLink to="/deshboard">Deshboard</RouterLink>
      </nav>
    </div>
    <LoginSignup />
  </header>
</template>

<script>
import LoginSignup from "./login-signup.vue";
export default {
  components: {
    LoginSignup,
  },
};
</script>
