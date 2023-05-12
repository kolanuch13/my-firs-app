<template>
  <input class="custom-input" v-on="listeners">
</template>

<script>
  export default {
    name: 'CustomInput',
    computed: {
      listeners() {
        return {
          ...this.$listeners,
          input: event => this.$emit('input', event.target.value)
        }
      }  
    }
  }
</script>

<style lang="scss" scoped>
  @import'../../assets/scss/variables.scss';
  .custom-input {
    min-height: 40px;
    border: 2px solid $main-color;
    font-size: 18px;
    outline: none;
    line-height: inherit;
    padding: 8px 15px;
    max-width: 220px;
  }
</style>