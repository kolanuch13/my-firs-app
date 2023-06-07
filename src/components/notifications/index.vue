<template>
  <notifications classes="vue-notification"/>
</template>

<script>
export default {
  name: "NotificationsMain",
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";
::v-deep .vue-notification {
  padding: 10px;
  margin: 0 5px 5px;
  color: $white-color;
  background: #44A4FC;
  border-left: 5px solid #187FE7;

  .notification-title {
    font-size: 16px;
    line-height: 1.3;
  }

  .notification-content {
    font-size: 14px;
    margin-top: 5px;
  }
 
  &.warn {
    background: #ffb648;
    border-left-color: #f48a06;
  }
 
  &.error {
    background: #E54D42;
    border-left-color: #B82E24;
  }
 
  &.success {
    background: #68CD86;
    border-left-color: #42A85F;
  }
}
</style>
