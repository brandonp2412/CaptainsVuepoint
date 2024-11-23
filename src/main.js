import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import Home from "./components/Home.vue";
import { createMemoryHistory, createRouter } from "vue-router";
import Elements from "./components/Elements.vue";
import Internet from "./components/Internet.vue";
import Routing from "./components/Routing.vue";
import Templates from "./components/Templates.vue";
import Conditions from "./components/Conditions.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/elements", component: Elements },
  { path: "/internet", component: Internet },
  { path: "/routing", component: Routing },
  { path: "/templates", component: Templates },
  { path: "/conditions", component: Conditions },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
