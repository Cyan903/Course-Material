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
        }
    },

    actions: {
        insertCoach(ctx, data) {
            ctx.commit("addRequest", data);
        }
    },

    getters: {
        getRequests(state, _, _2, rootGetters) {
            const id = rootGetters.userid;

            return state.requests.filter(req => req.coachid == id);
        }
    }
};