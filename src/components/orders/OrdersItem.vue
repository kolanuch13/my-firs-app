<template>
  <div class="orders-items">
    <img :src="order[0].photo" alt="photo" class="orders-items__photo" />
    <div class="orders-items__details">
      <div class="orders-items__text">
        <h2 class="orders-items__title">{{ order[0].title }}</h2>
        <p class="orders-items__location"> {{ order[0].location.city }}</p>
        <div class="orders-items__cost">
          <span class="orders-items__price">UAH {{ order[0].price }}</span> per night
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrdersItem",
  props: {
    order: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.orders-items {
  display: flex;
  margin-bottom: 20px;

  &__title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  &__photo {
    display: block;
    width: 45%;
    height: 190px;
    object-fit: cover;
  }

  &__details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 55%;
    padding: 20px;
    border: 2px solid #e1efff;
    border-left: none;
  }

  &__cost {
    margin-top: 40px;
  }

  &__price {
    font-size: 20px;
    font-weight: 700;
  }
}
</style>
