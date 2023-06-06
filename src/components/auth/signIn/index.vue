<template>
  <AuthContainer class="signIn">
    <MainTitle class="signIn__title"> Sign in </MainTitle>
    <FormComponent
      class="signIn__form"
      ref="form"
      @submit.prevent="handleSubmit"
    >
      <CustomInput
        class="signIn__input"
        v-model="formData.name"
        name="name"
        type="text"
        placeholder="Name"
        :rules="nameRules"
        autocomplete="username"
      />
      <CustomInput
        class="signIn__input"
        v-model="formData.email"
        name="email"
        type="email"
        placeholder="Email"
        :rules="emailRules"
        autocomplete="email"
      />
      <CustomInput
        class="signIn__input"
        v-model="formData.password"
        name="password"
        type="password"
        placeholder="Password"
        :rules="passwordRules"
        autocomplete="current-password"
      />
      <CustomInput
        class="signIn__input"
        v-model="formData.confirmPassword"
        name="password"
        type="password"
        placeholder="Confirm password"
        :rules="confirmPasswordRules"
        autocomplete="current-password"
      />
      <Button class="signIn__button" type="submit" :loading="loading">Submit</Button>
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
  name: "SignInForm",
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
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
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
    nameRules() {
      return [this.rules.isRequired];
    },
    emailRules() {
      return [this.rules.emailValidation, this.rules.isRequired];
    },
    passwordRules() {
      return [this.rules.passwordValidation, this.rules.isRequired];
    },
    confirmPasswordRules() {
      return [(val) => ({
        hasPassed: val === this.formData.password,
        message: 'Paswords are not similar'
      })]
    },
  },
  methods: {
    ...mapActions('auth', ['signIn']),
    async handleSubmit() {
      const { form } = this.$refs;
      const isFormValid = form.validate();
      
      if (!isFormValid) {
        try {
          this.loading = true;
          await this.signIn(this.formData)
          this.$router.push({name: 'home'})
          form.reset()
        } catch (error) {
          this.$notify({
            type: 'error',
            title: `Ouups!`,
            text: error.message
          });
        } finally {
          this.loading = false
        }
      } else {
        console.log("form does not valid");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.signIn {
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
