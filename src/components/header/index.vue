<template>
  <header class="header">
    <ContainerMain>
      <div class="header__content">
        <router-link to="/">
          <LogoMain/>
        </router-link>
        <AccountActions v-if="isLoggedIn"/>
        <AuthActions v-else/>
      </div>
    </ContainerMain>
  </header>
</template>

<script>
import ContainerMain from '../shared/ContainerMain.vue';
import LogoMain from '../LogoMain.vue';
import AuthActions from './AuthActions.vue';
import AccountActions from './AccountActions.vue'
import { mapGetters } from 'vuex';

  export default {
  name: 'HeaderMain',
    components: {
      ContainerMain,
      LogoMain,
      AuthActions,
      AccountActions
  },
  computed: {
      ...mapGetters('auth', ['isLoggedIn'])
    }
  }
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: $background-color;
  padding: 16px 0;
  z-index: 100;

  &__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
a {
  text-decoration: none;
}

@media screen and (max-width: 680px) {
  .header {
    width: 100vw;
  }
}
</style>