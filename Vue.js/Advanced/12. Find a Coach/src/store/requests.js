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
        getRequests(state) {
            return state.requests;
        }
    }
};