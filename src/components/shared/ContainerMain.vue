<template>
  <div class="container">
    <slot>Default value</slot>
  </div>
</template>

<script>
  export default {
    name: "ContainerMain"
  }
</script>

<style lang="scss" scoped>
  .container {
  }
  
  @media screen and (max-width: 680px) {
    .container {
      margin: 0 15px;
    }
  }

  @media screen and (min-width: 1110px) {
    .container {
      width: 1110px;
      margin: 0 auto;
    }
  }

  
</style>