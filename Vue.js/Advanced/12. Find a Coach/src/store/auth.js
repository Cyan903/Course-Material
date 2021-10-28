import { api } from "../../apiconfig.json";

let timer = null;

export default {
    state() {
        return {
            token: null,
            userId: null,
            loggedout: false
        };
    },

    mutations: {
        setUser(state, payload) {
            state.token = payload.token;
            state.userId = payload.userId;
            state.loggedout = false;
        },
        
        didLogout(state) {
            state.loggedout = true;
        }
    },

    actions: {
        async auth(ctx, payload) {
            const url = payload.urlType;
            const res = await fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true
                })
            }).then(j => j.json());

            const expire = +(res.expiresIn) * 1000;
            const expireDate = new Date().getTime() + expire; 

            localStorage.setItem("token", res.idToken);
            localStorage.setItem("userId", res.localId);
            localStorage.setItem("expiresIn", expireDate);
            timer = setTimeout(() => ctx.dispatch("autoLogout"), expire);

            ctx.commit("setUser", {
                token: res.idToken,
                userId: res.localId
            });

            console.log(res);
        },

        async signup(ctx, payload) {
            return ctx.dispatch("auth", {
                ...payload,
                urlType: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${api}`
            });
        },

        async login(ctx, payload) {
            return ctx.dispatch("auth", {
                ...payload,
                urlType: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${api}`
            });
        },

        logout(ctx) {
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            localStorage.removeItem("expiresIn");
            clearTimeout(timer);

            ctx.commit("setUser", {
                token: null,
                userId: null
            });
        },

        attemptAutoLogin(ctx) {
            const token = localStorage.getItem("token");
            const userId = localStorage.getItem("userId");
            const expire = localStorage.getItem("expiresIn");
            const curtime = +expire - (new Date().getTime());
            if (curtime < 0) return;

            timer = setTimeout(() => ctx.dispatch("autoLogout"), curtime);

            if (token && userId) {
                ctx.commit("setUser", {
                    token, userId,
                });
            }
        },

        autoLogout(ctx) {
            ctx.dispatch("logout");
            ctx.commit("didLogout");
        }
    },

    getters: {
        userid(state) {
            return state.userId;
        },

        token(state) {
            return state.token;
        },

        authenticated(state) {
            return !!state.token;
        },

        didAutoLogout(state) {
            return state.loggedout;
        }
    }
};