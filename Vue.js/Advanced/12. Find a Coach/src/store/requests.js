export default {
    namespaced: true,
    state() {
        return {
            requests: []
        };
    },

    mutations: {
        addRequest(state, payload) {
            state.requests.push(payload);
        },

        setRequests(state, payload) {
            state.requests = payload;
        }
    },

    actions: {
        async insertCoach(ctx, data) {
            const id = ctx.rootGetters.userid;

            const res = await fetch(`https://vue-coach-app-a8b1e-default-rtdb.firebaseio.com/requests/${id}.json`, {
                method: "PUT",
                body: JSON.stringify(data)
            });

            if (!res.ok) return;

            ctx.commit("addRequest", await res.json());
        },

        async loadAllRequests(ctx) {
            const token = ctx.rootGetters.token;
            const res = await fetch(`https://vue-coach-app-a8b1e-default-rtdb.firebaseio.com/requests.json?auth=${token}`);

            if (!res.ok) return;

            const json = await res.json();
            const requests = [];

            for (let i in json) {
                requests.push(json[i]);
            }


            ctx.commit("setRequests", requests);
        }
    },

    getters: {
        getRequests(state, _, _2, rootGetters) {
            const id = rootGetters.userid;

            return state.requests.filter(req => req.coachid == id);
        }
    }
};