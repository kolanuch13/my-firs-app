<template>
  <FormComponent ref="form" @submit.prevent="handleSubmit">
    <CustomInput
    v-model="formData.email"
    name="email"
    type="email"
    placeholder="email"
    :rules="emailRules"
    />
    <CustomInput
    v-model="formData.password"
    name="password"
    type="password"
      placeholder="Password"
      :rules="passwordRules"
    />
    <Button type="submit">Submit</Button>
  </FormComponent>
</template>

<script>
import FormComponent from "../shared/form/index.vue";
import CustomInput from "../shared/CustomInput.vue";
import Button from "../shared/SubmitButton.vue";
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from "../../utils/validationRules";

export default {
  name: "LoginForm",
  components: {
    FormComponent,
    CustomInput,
    Button,
  },
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    rules() {
      return {
        emailValidation,
        passwordValidation,
        isRequired,
      };
    },
    emailRules() {
      return [this.rules.emailValidation, this.rules.isRequired];
    },
    passwordRules() {
      return [this.rules.passwordValidation, this.rules.isRequired];
    },
  },
  methods: {
    handleSubmit() {
      const {form} = this.$refs
      const isFormValid = form.validate();
      if (isFormValid) {
        console.log(this.formData);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
