export default {
    namespaced: true,
    state() {
        return {
            loggedin: false
        }
    },

    getters: {
        isAuthed(state) {
            return state.loggedin;
        },

        who(state) {
            return state.loggedin || "Not logged in?";
        }
    },

    mutations: {
        changeLogin(state, payload) {
            state.loggedin = payload;
        }
    }
}