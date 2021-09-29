import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import SelectionStyles from "./components/UI/BaseSection.vue";

const app = createApp(App);

app.component("section-styles", SelectionStyles);
app.component('base-badge', BaseBadge);
app.component('badge-list', BadgeList);
app.component('user-info', UserInfo);

app.mount('#app');
