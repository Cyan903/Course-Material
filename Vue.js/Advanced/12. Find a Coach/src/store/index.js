import { createStore } from "vuex";

import coaches from "./coaches";
import requests from "./requests";


export default createStore({
    modules: { coaches, requests },
    state() {
        return {
            userid: ~~(Math.random()*1000000)
        };
    },

    getters: {
        userid(state) {
            return state.userid;
        }
    }
});