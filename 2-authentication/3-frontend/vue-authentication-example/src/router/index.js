import Vue from "vue";
import Router from "vue-router";
import Home from "components/home";
import Account from "components/account";
import Login from "components/login";
import store from "../store";

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) { // should be something like !document.cookie...
    next();
    return;
  }
  // important to always allow access to some part of the website only after authentication.
  // do not let scanners create weird journeys, and spam the backend with APIs calls - backend burst.
  next("/");
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/login");
};

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/account",
      name: "Account",
      component: Account,
      beforeEnter: ifAuthenticated
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      beforeEnter: ifNotAuthenticated
    }
  ]
});
