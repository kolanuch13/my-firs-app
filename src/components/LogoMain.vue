<template>
  <div class="logo">
    <img class="logo__image" :src="require('../../public/img/svg/logo.svg')" alt="logo">
    <p class="logo__text"><span class="logo__text--orange">GO</span>Home</p>
  </div>
</template>

<script>
export default {
  name: 'LogoMain',
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    &__text {
      font-style: normal;
      font-weight: 800;
      font-size: 18px;
      line-height: 1.22;
      display: flex;
      align-items: center;
      text-align: center;

      color: $main-color;

      &--orange {
        color: $white-color;
      }
    }
  }
</style>