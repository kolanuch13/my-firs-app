<template>
  <SectionWithHeaderSpacer>
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
              :key="apartment._id"
              :id="apartment._id"
              :descr="apartment.descr"
              :rating="apartment.rating"
              :imgSrc="apartment.photo"
              :price="apartment.price"
              class="apartments-list__item"
            />
          </template>
        </ApartmentsList>
        <div class="pagination-wrapper">
          <paginate
            :value="page"
            :page-count="maxPage"
            :clickHandler="onPaginationClick"
            :container-class="'pagination'"
          >
          </paginate>
        </div>
      </ContainerMain>
    </main>
  </SectionWithHeaderSpacer>
</template>

<script>
import ApartmentsList from "../components/appartment/ApartmentsList.vue";
import ApartmentsItem from "../components/appartment/ApartmentsItem.vue";
import ApartmentsFilterForm from "../components/appartment/ApartmentsFilterForm.vue";
import ContainerMain from "../components/shared/ContainerMain.vue";
import SectionWithHeaderSpacer from "@/components/shared/SectionWithHeaderSpacer.vue";
import { getApartmentsList } from "@/services/apartments.service";

export default {
  name: "HomePage",
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentsFilterForm,
    ContainerMain,
    SectionWithHeaderSpacer
  },
  data() {
    return {
      text: "",
      apartment: [],
      page: 0,
      maxPage: 0,
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
  async created() {
    try {
      const { data } = await getApartmentsList(this.page, 9);
      this.apartment = data.result;
      this.maxPage = data.allItems + 1
    } catch (error) {
      console.log(error);
    }
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
    async onPaginationClick(num) {
      this.page = num - 1;
      try {
        const { data } = await getApartmentsList(this.page, 9);
        this.apartment = data.result;
        this.maxPage = data.allItems + 1
      } catch (error) {
        console.log(error);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.apartments-filter {
  margin-bottom: 40px;

  &__pagination {
    display: flex;
    flex-direction: row;
    background-color: red;
  }
}

.pagination-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.pagination {
  display: flex;
  padding-left: 0;
  margin: 0 auto;
  border-radius: 4px;
  gap: 5px;
}
</style>
