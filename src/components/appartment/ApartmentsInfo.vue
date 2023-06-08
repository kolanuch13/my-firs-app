<template>
  <article class="apartment-info">
    <div class="apartment-info__heading">
      <h1 class="apartment-info__title">{{ apartment.title }}</h1>
      <StarRating :rating="apartment.rating"/>
    </div>
    <img :src="apartment.photo" :alt="apartment.title" class="apartment-info__photo" />
    <p class="apartment-info__description">{{ apartment.descr }}</p>
    <div class="apartment-info__button">
      <SubmitButton @click="handleAppartmentsBooking" :loading="isLoading">Booking</SubmitButton>
    </div>
  </article>
</template>

<script>
import StarRating from '../atributes/StarRating.vue'
import SubmitButton from '../shared/SubmitButton.vue';
import {bookApartment} from '../../services/orders.service'

export default {
  name: "ApartmentsInfo",
  components: {
    StarRating,
    SubmitButton
  },
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isLoading: false,
    }
  },
  methods: {
    async handleAppartmentsBooking() {
      const body = {
        apartmentId: this.$route.params.id,
        date: Date.now()
      }

      try {
        this.isLoading = true
        await bookApartment(body)
        this.$notify({
          type: 'success',
          title: 'Horraaay!',
          text: 'Appartment successfully booked!'
        })
      } catch (error) {
        this.$notify({
          type: 'error',
          title: 'Ooouups:(',
          text: error.message,
        })
      } finally {
        this.isLoading = false
      }
    }
  }
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

  &__button {
    margin-top: 20px;
    text-align: center;
  }
}

</style>
