import FooPage from "./pages/FooPage.vue";
import BarPage from "./pages/BarPage.vue";
import HomePage from "./pages/HomePage.vue";
import ApartmentPage from "./pages/ApartmentPage.vue";
import ErrorPage from "./pages/ErrorPage.vue";
import LoginPage from "./pages/LoginPage.vue";
import SignInPage from "./pages/SignInPage.vue";
import MyOrdersPage from "./pages/MyOrdersPage";

import VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    component: HomePage,
    name: "home",
  },
  {
    path: "/foo",
    component: FooPage,
    name: "foo",
  },
  {
    path: "/bar",
    component: BarPage,
    name: "bar",
  },
  {
    path: "/apartment/:id",
    component: ApartmentPage,
    name: "apartment",
  },
  {
    path: "/my-orders",
    component: MyOrdersPage,
    name: "my-orders",
  },
  {
    path: "/login",
    component: LoginPage,
    name: "login-page",
  },
  {
    path: "/signIn",
    component: SignInPage,
    name: "signIn-page",
  },
  {
    path: "*",
    component: ErrorPage,
    name: "error",
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
