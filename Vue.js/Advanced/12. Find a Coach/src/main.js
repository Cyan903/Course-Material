import { createApp } from "vue";

import App from "./App.vue";
import Router from "./router";
import Store from "./store/index";

import BaseCard from "./components/base/Card.vue";
import BaseButton from "./components/base/Button.vue";
import BaseBadge from "./components/base/Badge.vue";

const app = createApp(App);

app.use(Router);
app.use(Store);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-badge", BaseBadge);

app.mount("#app");