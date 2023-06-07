<template>
  <AuthContainer class="login">
    <MainTitle class="login__title"> Log in </MainTitle>
    <FormComponent
      class="login__form"
      ref="form"
      @submit.prevent="handleSubmit"
    >
      <CustomInput
        class="login__input"
        v-model="formData.email"
        name="email"
        type="email"
        placeholder="Email"
        :rules="emailRules"
        autocomplete="email"
      />
      <CustomInput
        class="login__input"
        v-model="formData.password"
        name="password"
        type="password"
        placeholder="Password"
        :rules="passwordRules"
        autocomplete="current-password"
      />
      <Button class="login__button" type="submit" :loading="loading"
        >Submit</Button
      >
    </FormComponent>
  </AuthContainer>
</template>

<script>
import FormComponent from "../../shared/form/index.vue";
import CustomInput from "../../shared/CustomInput.vue";
import Button from "../../shared/SubmitButton.vue";
import AuthContainer from "../../auth/AuthContainer.vue";
import MainTitle from "../../shared/MainTitle.vue";

import {
  emailValidation,
  passwordValidation,
  isRequired,
} from "../../../utils/validationRules";
import { mapActions } from "vuex";

export default {
  name: "LoginForm",
  components: {
    FormComponent,
    CustomInput,
    Button,
    AuthContainer,
    MainTitle,
    // AuthSection
  },
  data() {
    return {
      loading: false,
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
      return [this.rules.isRequired];
    },
  },
  methods: {
    ...mapActions('auth', ['login']),
    async handleSubmit() {
      const { form } = this.$refs;
      const isFormValid = form.validate();
      if (isFormValid) {
        try {
          this.loading = true;
          await this.login(this.formData)
          this.$router.push({ name: 'home' })
          form.reset()
        } catch (error) {
          this.$notify({
            type: 'error',
            title: `Ouups!`,
            text: error.message
          });
        } finally {
          this.loading = false;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  &__form {
    display: block;
    flex-direction: column;
  }

  &__title {
    text-align: center;
  }

  &__input {
    margin-bottom: 20px;
    width: 100%;
  }

  &__button {
    margin-top: 15px;
    width: 100%;
  }
}
</style>
