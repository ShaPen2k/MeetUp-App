import { createApp } from "vue";
import "./style.css";
import App2 from "./components/App2.vue";
import Registration from "./components/Registration.vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  routes: [
    {
      path: "/lk",
      component: Registration,
    },
    {
      path: "/",
      component: App2,
    },
  ],
  history: createWebHistory(),
});
const app = createApp(App);
app.use(router);
app.mount("#app");
