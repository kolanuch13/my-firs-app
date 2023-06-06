<template>
  <AuthContainer class="login">
    <MainTitle class="login__title"> Login </MainTitle>
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
      />
      <CustomInput
        class="login__input"
        v-model="formData.password"
        name="password"
        type="password"
        placeholder="Password"
        :rules="passwordRules"
      />
      <Button class="login__button" type="submit">Submit</Button>
    </FormComponent>
  </AuthContainer>
</template>

<script>
import FormComponent from "../../shared/form/index.vue";
import CustomInput from "../../shared/CustomInput.vue";
import Button from "../../shared/SubmitButton.vue";
import AuthContainer from "../../auth/AuthContainer.vue";
import MainTitle from "../../shared/MainTitle.vue";
// import AuthSection from "../auth/AuthSection.vue";
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from "../../../utils/validationRules";
import {loginUser} from '../../../services/authService'

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
      return [this.rules.passwordValidation];
    },
  },
  methods: {
    async handleSubmit() {
      const { form } = this.$refs;
      const isFormValid = form.validate();
      if (isFormValid) {
        try {
          const {data} = await loginUser(this.formData)
          console.log(data);
        } catch (error) {
          console.log(error);
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
