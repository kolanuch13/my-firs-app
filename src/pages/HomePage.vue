<template>
  <main class="home-page">
    <ContainerMain>
      <ApartmentsFilterForm class="apartments-filter" @submit="filter" />
    </ContainerMain>
    <ContainerMain>
      <p v-if="!filteredApartments.length">
        There is no apartment with that options
      </p>
      <ApartmentsList :items="filteredApartments">
        <template v-slot:apartment="{ apartment }">
          <ApartmentsItem
            :key="apartment.id"
            :id="apartment.id"
            :descr="apartment.descr"
            :rating="apartment.rating"
            :imgSrc="apartment.photo"
            :price="apartment.price"
            class="apartments-list__item"
            @click.native="handleItemClick"
          />
        </template>
      </ApartmentsList>
    </ContainerMain>
  </main>
</template>

<script>
import ApartmentsList from "../components/appartment/ApartmentsList.vue";
import ApartmentsItem from "../components/appartment/ApartmentsItem.vue";
import { apartment } from "../components/appartment/apartments";
import ApartmentsFilterForm from "../components/appartment/ApartmentsFilterForm.vue";
import ContainerMain from "../components/shared/ContainerMain.vue";

export default {
  name: "HomePage",
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentsFilterForm,
    ContainerMain,
  },
  data() {
    return {
      text: "",
      apartment,
      filters: {
        city: "",
        price: 0,
      },
    };
  },
  computed: {
    filteredApartments() {
      return this.filterByCityName(this.filterByPrice(this.apartment));
    },
  },
  methods: {
    filter({ city, price }) {
      this.filters.city = city;
      this.filters.price = price;
    },
    filterByCityName(apartment) {
      if (!this.filters.city) return apartment;
      return apartment.filter(
        (apartment) => apartment.location.city === this.filters.city
      );
    },
    filterByPrice(apartment) {
      if (!this.filters.price) return apartment;
      return apartment.filter(
        (apartment) => apartment.price <= this.filters.price
      );
    },
  },
};
</script>

<style lang="scss" scoped>

.apartments-filter {
  margin-bottom: 40px;
}
</style>
