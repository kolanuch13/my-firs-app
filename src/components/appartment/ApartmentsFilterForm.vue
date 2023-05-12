<template>
  <form class="form" @submit.prevent="handleSubmit">
    <CustomSelect class="form__select" v-model="city" :items="cities" />
    <CustomInput class="form__input" v-model="price" placeholder="Price" />
    <SubmitButton class="form__submit" type="submit"
      >Chose Apartment</SubmitButton
    >
  </form>
</template>

<script>
import CustomSelect from "../shared/CustomSelect";
import CustomInput from "../shared/CustomInput";
import SubmitButton from "../shared/SubmitButton";

export default {
  name: "ApartmentsFilterForm",
  components: {
    CustomSelect,
    CustomInput,
    SubmitButton,
  },
  data() {
    return {
      price: "",
      city: "",
    };
  },
  computed: {
    cities() {
      return [
        { value: "", label: "City", selected: true },
        "New York City",
        "Miami",
        "Los Angeles",
        "Seattle",
        "Chicago",
        "San Francisco",
        "Boston",
        "Denver",
      ];
    },
  },
  // emits: {
  //   "submit": null
  // },
  methods: {
    handleSubmit() {
      this.$emit("submit", { city: this.city, price: this.price });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;

  &__select {
    margin-right: 30px;
  }

  &__submit {
    margin-left: auto;
  }
}
</style>
