<template>
  <div id="app">
    <NotificationsMain />
    <div class="content">
      <HeaderMain />
      <router-view></router-view>
    </div>
    <FooterMain />
  </div>
</template>

<script>
import HeaderMain from "./components/header/index.vue";
import FooterMain from "./components/FooterMain.vue";
import NotificationsMain from './components/notifications'

export default {
  name: "App",
  components: {
    FooterMain,
    HeaderMain,
    NotificationsMain,
  },
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/variables.scss";

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $white-color;
}

.content {
  flex-grow: 1;
}
</style>
