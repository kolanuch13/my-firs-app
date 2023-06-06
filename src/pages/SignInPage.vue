<template>
  <main class="signIn">
    <AuthSection>
      <SignInForm />
    </AuthSection>
  </main>
</template>

<script>
import AuthSection from "@/components/auth/AuthSection.vue";
import SignInForm from '../components/auth/signIn/index.vue'
export default {
  name: "SignInPage",
  components: {
    AuthSection,
    SignInForm
  },
};
</script>

<style lang="scss" scoped></style>
