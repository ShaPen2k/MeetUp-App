import { createApp } from "vue";
import "./style.css";
import RegForm from "./RegForm.vue";
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
      component: App,
    },
  ],
  history: createWebHistory(),
});
const app = createApp(RegForm);
app.use(router);
app.mount("#app");
