import { createRouter, createWebHistory } from "vue-router";

import AllUsers from "./pages/AllUsers.vue";
import Goals from "./pages/Goals.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: AllUsers
        },

        {
            path: "/goals",
            component: Goals
        }
    ]
});

export default router;