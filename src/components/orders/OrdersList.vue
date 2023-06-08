<template>
  <div class="orders-list">
    <p v-if="!items.length">There is no orders yet:(</p>
    <template v-else>
      <OrdersItem
        v-for="order in items"
        :key="order._id"
        :orderId="order._id"
        :order="order.apartmentId"
      />
    </template>
  </div>
</template>

<script>
import OrdersItem from "./OrdersItem.vue";
export default {
  name: "OrdersList",
  components: {
    OrdersItem,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.orders-list {
  margin-top: 20px;
}
</style>
