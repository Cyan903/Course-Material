import { api } from "../../apiconfig.json";

export default {
    state() {
        return {
            token: null,
            userId: null,
            tokenExipre: null
        };
    },

    mutations: {
        setUser(state, payload) {
            state.token = payload.token;
            state.userId = payload.userId;
            state.tokenExipre = payload.tokenExpiration;
        }
    },

    actions: {
        async signup(ctx, payload) {
            const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${api}`, {
                method: "POST",
                body: JSON.stringify({
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true
                })
            }).then(j => j.json())

            ctx.commit("setUser", {
                token: res.idToken,
                userId: res.localId,
                tokenExipre: res.expiresIn
            });

            console.log(res);
        },

        async login(ctx, payload) {
            const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${api}`, {
                method: "POST",
                body: JSON.stringify({
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true
                })
            }).then(j => j.json())

            ctx.commit("setUser", {
                token: res.idToken,
                userId: res.localId,
                tokenExipre: res.expiresIn
            });

            console.log(res);
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
        }
    }
};