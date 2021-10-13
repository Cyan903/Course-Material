import { createApp } from "vue";

import App from "./App.vue";
import Router from "./router";
import Store from "./store/index";

import BaseCard from "./components/base/Card.vue";

const app = createApp(App);

app.use(Router);
app.use(Store);

app.component("base-card", BaseCard);

app.mount("#app");
