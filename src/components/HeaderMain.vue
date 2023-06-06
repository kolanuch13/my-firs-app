<template>
  <header class="header">
    <ContainerMain>
      <router-link to="/">
        <LogoMain/>
      </router-link>
    </ContainerMain>
  </header>
</template>

<script>
import ContainerMain from './shared/ContainerMain.vue';
import LogoMain from './LogoMain.vue';
  export default {
  name: 'HeaderMain',
    components: {
      ContainerMain,
      LogoMain,
    }
  }
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: $background-color;
  padding: 16px 0;
  z-index: 100;
}
a {
  text-decoration: none;
}
</style>