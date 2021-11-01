import { createRouter, createWebHistory } from "vue-router";
import CoachList from "./pages/coaches/CoachList.vue";

// import CoachDetails from "./pages/coaches/CoachDetails.vue";
// import CoachRegister from "./pages/coaches/CoachRegister.vue";
// import ContactCoach from "./pages/requests/ContactCoach.vue";
// import RequestRecieved from "./pages/requests/RequestRecieved.vue";
// import UserAuth from "./pages/auth/UserAuth.vue";

const CoachDetails = () => import("./pages/coaches/CoachDetails.vue");
const CoachRegister = () => import("./pages/coaches/CoachRegister.vue");
const ContactCoach = () => import("./pages/requests/ContactCoach.vue");
const RequestRecieved = () => import("./pages/requests/RequestRecieved.vue");
const UserAuth = () => import("./pages/auth/UserAuth.vue");

import store from "./store/index";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: "/coaches"
        },

        {
            path: "/coaches",
            component: CoachList
        },
        
        {
            path: "/coaches/:id",
            props: true,
            component: CoachDetails,
            children: [
                {
                    path: "contact",
                    component: ContactCoach
                }
            ]
        },
        
        {
            path: "/register",
            component: CoachRegister,
            meta: { authRequired: true }
        },

        {
            path: "/requests",
            component: RequestRecieved,
            meta: { authRequired: true }
        },

        {
            path: "/auth",
            component: UserAuth,
            meta: { authNotRequired: true }
        },

        {
            path: "/:notFound(.*)",
            component: NotFound
        },
    ]
});

router.beforeEach(function(to, _, next) {
    if (to.meta.authRequired && !store.getters.authenticated) {
        return next("/auth");
    } else if (to.meta.authNotRequired && store.getters.authenticated) {
        return next("/coaches");
    }

    next();
});

export default router;