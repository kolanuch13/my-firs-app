import VueRouter from "vue-router";
import store from './store'

const HomePage = () => import('./pages/HomePage');
const ApartmentPage = () => import('./pages/ApartmentPage')
const ErrorPage = () => import('./pages/ErrorPage')
const LoginPage = () => import('./pages/LoginPage')
const SignInPage = () => import('./pages/SignInPage')
const MyOrdersPage = () => import('./pages/MyOrdersPage')

const routes = [
  {
    path: "/",
    component: HomePage,
    name: "home",
  },
  {
    path: "/apartment/:id",
    component: ApartmentPage,
    name: "apartment",
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/my-orders",
    component: MyOrdersPage,
    name: "my-orders",
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    component: LoginPage,
    name: "login-page",
    meta: {
      hideForAuth: true
    }
  },
  {
    path: "/signIn",
    component: SignInPage,
    name: "signIn-page",
    meta: {
      hideForAuth: true
    }
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

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters["auth/isLoggedIn"];

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next({name: 'login-page'});
    }
  }

  if (to.matched.some((record) => record.meta.hideForAuth)) {
    if (isLoggedIn) {
      next({name: 'home-page'});
    }
  }

  next()
})

export default router;
