import { createApp } from 'vue';
import logger from "./mixins/mounted";

import App from './App.vue';

const app = createApp(App)

app.mixin(logger);
app.mount('#app');
