<template>
  <main class="my-orders-page">
    <SectionWithHeaderSpacer>
      <ContainerMain>
        <section class="my-orders__content">
          <MainTitle>Orders</MainTitle>
          <OrdersList :items="orders" />
        </section>
      </ContainerMain>
    </SectionWithHeaderSpacer>
  </main>
</template>

<script>
import SectionWithHeaderSpacer from "@/components/shared/SectionWithHeaderSpacer.vue";
import ContainerMain from "@/components/shared/ContainerMain.vue";
import MainTitle from "@/components/shared/MainTitle.vue";
import OrdersList from "@/components/orders/OrdersList.vue";
import { getOrders } from "../services/orders.service";

export default {
  name: "MyOrdersPage",
  components: {
    SectionWithHeaderSpacer,
    ContainerMain,
    MainTitle,
    OrdersList,
  },
  data() {
    return {
      orders: []
    }
  },
  async created() {
    try {
      const { data } = await getOrders();
      this.orders = data.orders;
    } catch (error) {
      this.$notify({
        type: "error",
        title: "Ooouups:(",
        text: error.message,
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.my-orders {
  &__content {
    max-width: 730px;
    margin: 0 auto 100px;
  }
}
</style>
