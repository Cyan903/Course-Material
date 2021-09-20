import Vue from "vue"
import App from "./App.vue"

Vue.config.productionTip = false

import contact from "./components/FriendContact.vue";

Vue.component("contact-comp", contact);

new Vue({
	render: h => h(App),
}).$mount("#app");


