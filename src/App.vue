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
import HeaderMain from "./components/HeaderMain.vue";
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
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  flex-grow: 1;
}
</style>
