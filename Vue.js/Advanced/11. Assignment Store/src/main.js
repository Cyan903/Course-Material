import { createApp } from 'vue';

import router from './router.js';
import store from "./store/store.js";
import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';

// $store.getters.shoppingCart.qty 



const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-badge', BaseBadge);
app.mount('#app');