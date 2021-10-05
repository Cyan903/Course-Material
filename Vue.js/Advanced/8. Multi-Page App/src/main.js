import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";

import App from './App.vue';
import TeamsList from "./components/teams/TeamsList.vue";
import UsersList from "./components/users/UsersList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import TeamsFooter from "./components/teams/TeamsFooter.vue";
import UserFooter from "./components/users/UserFooter.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: "/teams"
        },
        
        {
            name: "teams",
            alias: "/", // url does not change with this
            path: "/teams",
            components: { default: TeamsList, "app-view": TeamsFooter },
            // children: [
            //     {
            //         path: ":id",
            //         component: TeamMembers,
            //         props: true
            //     },
            // ]
        },

        {
            path: "/users",
            components: { default: UsersList, "app-view": UserFooter }
        },

        {
            path: "/teams/:id",
            component: TeamMembers,
            props: true
        },

        {
            path: "/:notfound(.*)",
            redirect: "/"
        }
    ],

    scrollBehavior(to, from, savedPosition) {
        console.log(to, from, savedPosition);
        return {
            left: 0,
            top: 100
        }
    }
});

// router.beforeEach((to, from, next) => {
//     console.log(to, from)
//     next();
// });

const app = createApp(App)

app.use(router);
app.mount('#app');
