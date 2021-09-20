import Vue from "vue"
import App from "./App.vue"

Vue.config.productionTip = false

import contact from "./components/FriendContact.vue";
import addfriend from "./components/AddFriend.vue";


Vue.component("contact-comp", contact);
Vue.component("add-friend", addfriend);


new Vue({
	render: h => h(App),
}).$mount("#app");


