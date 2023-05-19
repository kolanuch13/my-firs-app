import FooPage from './pages/FooPage.vue'
import BarPage from "./pages/BarPage.vue";
import HomePage from "./pages/HomePage.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/foo",
    component: FooPage,
  },
  {
    path: "/bar",
    component: BarPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router