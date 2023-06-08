<template>
  <SectionWithHeaderSpacer>
    <main class="apartment-page">
      <ContainerMain>
        <div v-if="apartment" class="apartment-page__content">
          <ApartmentsInfo :apartment="apartment" />
          <div class="apartment-page__additional-info">
            <ApartmentsOwner
              class="apartment-page__owner"
              :owner="apartment.owner"
            />
            <ReviewsItem :reviews="reviewsList" />
          </div>
        </div>
      </ContainerMain>
    </main>
  </SectionWithHeaderSpacer>
</template>

<script>
import ContainerMain from "../components/shared/ContainerMain.vue";
import ApartmentsInfo from "@/components/appartment/ApartmentsInfo.vue";
import ApartmentsOwner from "@/components/appartment/ApartmentsOwner.vue";
import ReviewsItem from "../components/reviews/index.vue";
import reviewsList from "../components/reviews/reviews.json";
import SectionWithHeaderSpacer from "@/components/shared/SectionWithHeaderSpacer.vue";
import { getApartmentById } from "@/services/apartments.service";

export default {
  name: "ApartmentPage",
  components: {
    ContainerMain,
    ApartmentsInfo,
    ApartmentsOwner,
    ReviewsItem,
    SectionWithHeaderSpacer,
  },
  data() {
    return {
      apartment: null,
    };
  },
  computed: {
    reviewsList() {
      return reviewsList;
    },
  },
  async created() {
    try {
      const { id } = this.$route.params;
      const { data } = await getApartmentById(id);
      this.apartment = data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 55px;
  &__content {
    display: flex;
    align-items: flex-start;
    gap: 30px;
  }
  &__additional-info {
    margin-top: 40px;
    max-width: 350px;
    flex-grow: 0;
    flex-shrink: 1;
  }
}

@media screen and (max-width: 640px) {
  .apartment-page {
    &__content {
      flex-direction: column;
    }

    &__additional-info {
      max-width: 100vw;
      flex-shrink: 0;
    }
  }
}
</style>
