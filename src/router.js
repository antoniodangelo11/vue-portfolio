import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import AppIndex from "./pages/AppIndex.vue";
import Contacts from "./pages/Contacts.vue";
import App404 from "./pages/App404.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about-us",
      name: "about-us",
      component: About,
    },
    {
      path: "/index",
      name: "index",
      component: AppIndex,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "app404",
      component: App404,
    },
  ],
});

export { router };
