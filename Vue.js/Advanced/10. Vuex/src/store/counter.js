export default {
    state() {
        return {
            counter: 0,
        }
    },

    mutations: {
        add(state) {
            state.counter++;
        },

        increase(state, payload) {
            state.counter += payload;
        }
    },

    // like mutations except async
    actions: {
        async add(c) {
            await new Promise(end => setTimeout(end, 5000));
            c.commit("increase", 100);
        }
    },

    getters: {
        counter(state) {
            return state.counter;
        },

        timestwo(_, getters) {
            return getters.counter*2;
        }
    }
}