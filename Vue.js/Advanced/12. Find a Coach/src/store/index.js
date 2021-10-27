import { createStore } from "vuex";

import auth from "./auth";
import coaches from "./coaches";
import requests from "./requests";


export default createStore({
    modules: { auth, coaches, requests }
});