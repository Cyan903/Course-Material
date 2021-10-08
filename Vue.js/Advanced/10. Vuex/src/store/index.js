import { createStore } from "vuex";

import auth from "./auth";
import counter from "./counter";


export default createStore({
    modules: {
        authModule: auth,
        counterModule: counter
    }
});