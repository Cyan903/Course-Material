export default {
    namespaced: true,
    state() {
        return {
            coaches: [
                {
                    id: 'c1',
                    firstName: 'Maximilian',
                    lastName: 'Schwarzmüller',
                    areas: ['frontend', 'backend', 'career'],
                    description: "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                    hourlyRate: 100000,
                },

                {
                    id: 'c2',
                    firstName: 'Julie',
                    lastName: 'Jones',
                    areas: ['frontend', 'career'],
                    description: 'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                    hourlyRate: 30,
                },
            ],
        };
    },

    mutations: {
        insertCoach(state, payload) {
            state.coaches.push(payload);
        }
    },

    actions: {
        addCoach(ctx, data) {
            // 👍
            data.hourlyRate = data["rate"];

            const formData = {
                id: ctx.rootGetters.userid,
                ...data
            };

            ctx.commit("insertCoach", formData);
        }
    },

    getters: {
        getCoaches(state) {
            return state.coaches;
        },

        hasCoaches(state) {
            return state.coaches.length > 0;
        },

        isCoach(_, getters, _2, rootGetters) {
            const coaches = getters.getCoaches;
            const userid = rootGetters.userid;

            return coaches.some(coach => coach.id == userid);
        }
    }
};