import FooFirst from './pages/FooFirst.vue'
import BarFirst from "./pages/BarFirst.vue";
import VueRouter from "vue-router";

const routes = [
  {
    path: "/foo",
    component: FooFirst,
  },
  {
    path: "/bar",
    component: BarFirst,
  },
];

const router = new VueRouter({ routes })

export default router