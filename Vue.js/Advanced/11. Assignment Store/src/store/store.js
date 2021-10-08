import { createStore } from 'vuex';
import authModule from "./modules/auth/index";
import storeModule from "./modules/store/index";

export default createStore({
    modules: { authModule, storeModule }
});