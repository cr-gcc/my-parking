import { createRouter, createWebHistory } from "vue-router";

import Login from "@/views/LoginView.vue";
import Home from "@/views/HomeView.vue";

const base = import.meta.env.VITE_BASE_URL || "/";
const loginRoute = import.meta.env.VITE_API_LOGIN ;

const routes = [
  {
    path: "/login",
    component: Login,
    meta: {
      layout: "none",
      requiresAuth: false,
    },
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  }
];

const router = createRouter({
  history: createWebHistory(base),
  routes,
});

export default router;