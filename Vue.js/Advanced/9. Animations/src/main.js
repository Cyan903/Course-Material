import { createApp } from 'vue';

import App from './App.vue';
import router from "./Router";
import BaseModal from './components/BaseModal.vue';

const app = createApp(App);

app.component('base-modal', BaseModal);
app.use(router);
app.mount('#app');
