<template>
  <article class="apartment-info">
    <div class="apartment-info__heading">
      <h1 class="apartment-info__title">{{ apartment.title }}</h1>
      <StarRating :rating="apartment.rating"/>
    </div>
    <img :src="apartment.photo" :alt="apartment.title" class="apartment-info__photo" />
    <p class="apartment-info__description">{{ apartment.descr }}</p>
  </article>
</template>

<script>
import StarRating from '../atributes/StarRating.vue'
export default {
  name: "ApartmentsInfo",
  components: {
    StarRating
  },
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.apartment-info{
  &__heading{
    display: flex;

  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 20px;
    margin-right: 20px;
  }

  &__photo {
    max-width: 100%;
  }

  &__description {
    line-height: 1.3;
    margin-top: 30px;
  }
}
</style>
