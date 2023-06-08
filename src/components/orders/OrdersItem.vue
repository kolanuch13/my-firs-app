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
      <button class="orders-items__icon" @click="handleDelete">
        <svg 
          class="orders-items__icon--svg"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 32 32"
        >
          <path d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import {deleteOrder} from '../../services/orders.service'
export default {
  name: "OrdersItem",
  props: {
    order: {
      type: Array,
      required: true,
    },
    orderId: {
      type: String,
      required: true
    }
  },
  methods: {
    async handleDelete() {
      try {
        await deleteOrder(this.orderId);
        this.$notify({
          type: 'success',
          title: 'Horaaay!',
          text: 'The order deleted!',
        })
      } catch (error) {
        this.$notify({
          type: 'error',
          title: 'Ooupss!',
          text: error.message
        })
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.orders-items {
  position: relative;
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

  &__icon {
    position: absolute;
    top: 0;
    right: 0;
    background: none;
    outline: none;
    border: none;

    &--svg{
      margin: 5px;
      fill: black;
      transition: fill 0.4s;

      &:hover {
        fill: $main-color;
      }
    }
  }
}
</style>
