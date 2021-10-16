import { createStore } from "vuex";

import coaches from "./coaches";


export default createStore({
    modules: {
        coaches
    },

    state() {
        return {
            userid: Math.random()
        };
    },

    getters: {
        userid(state) {
            return state.userid;
        }
    }
});