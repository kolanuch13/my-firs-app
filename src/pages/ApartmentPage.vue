<template>
  <main class="apartment-page">
    <ContainerMain>
      <div class="apartment-page__content">
        <ApartmentsInfo :apartment="apartment"/>
        <div class="apartment-page__additional-info">
          <ApartmentsOwner class="apartment-page__owner" :owner="apartment.owner"/>
          <ReviewsItem :reviews="reviewsList"/>
        </div>
      </div>
    </ContainerMain>
  </main>
</template>

<script>
import ContainerMain from "../components/shared/ContainerMain.vue"
import { apartment } from "../components/appartment/apartments";
import ApartmentsInfo from "@/components/appartment/ApartmentsInfo.vue";
import ApartmentsOwner from "@/components/appartment/ApartmentsOwner.vue";
import ReviewsItem from "../components/reviews/index.vue";
import reviewsList from "../components/reviews/reviews.json"

export default {
  name: 'ApartmentPage',
  components: {
    ContainerMain,
    ApartmentsInfo,
    ApartmentsOwner,
    ReviewsItem
  },
  computed: {
    reviewsList() {
      return reviewsList
    },
    apartment() {
      return apartment.find(apartment => apartment.id === this.$route.params.id)
    }
  },
  mounted() {
    console.log(this.apartment);
  }
}
</script>

<style lang="scss" scoped>
.apartment-page{
  padding-bottom: 55px;
  &__content {
    display: flex;
    align-items: flex-start;
    gap: 30px;
  }
  &__owner {
    min-width: 350px;
  }
}
</style>