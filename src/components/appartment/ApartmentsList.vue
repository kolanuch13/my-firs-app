<template>
    <div class="apartments-list">
      <template v-for="apartment in items">
        <slot name="apartment" v-bind:apartment="apartment"></slot>
      </template>
    </div>
</template>

<script>
  export default {
    name: 'ApartmentsList',
    props: {
      items: {
        type: Array,
        default: () => [],
      }
    }
  }
</script>

<style lang="scss" scoped>
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
}

@media screen and (max-width: 680px) {
  .apartments-list {
    flex-direction: column;
  }
}
</style>