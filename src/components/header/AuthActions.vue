<template>
  <div class="auth-actions">
    <router-link class="auth-actions__link" :to="{ name: 'login-page' }">
      Login
    </router-link>
    /
    <router-link class="auth-actions__link" :to="{ name: 'signIn-page' }">
      Sign In
    </router-link>
  </div>
</template>

<script>
export default {
  name: "AuthActions",
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.auth-actions {
  color: $white-color;

  &__link{
    color: inherit;
    text-decoration: none;
    transition: color 0.4s;

    &:hover {
      color: $main-color
    }
  }
}

</style>
