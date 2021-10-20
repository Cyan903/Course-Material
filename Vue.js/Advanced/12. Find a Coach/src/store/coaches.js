export default {
    namespaced: true,
    state() {
        return {
            coaches: []
        };
    },

    mutations: {
        insertCoach(state, payload) {
            state.coaches.push(payload);
        },

        setCoaches(state, payload) {
            state.coaches = payload;
        }
    },

    actions: {
        async addCoach(ctx, data) {
            const id = ctx.rootGetters.userid;

            // 👍
            data.hourlyRate = data["rate"];

            const res = await fetch(`https://vue-coach-app-a8b1e-default-rtdb.firebaseio.com/coaches/${id}.json`, {
                method: "PUT",
                body: JSON.stringify(data)
            });

            if (!res.ok) return;
            ctx.commit("insertCoach", { id, ...data });
        },

        async loadFromDB(ctx) {
            const res = await fetch(`https://vue-coach-app-a8b1e-default-rtdb.firebaseio.com/coaches.json`);
            if (!res.ok) return;

            const data = await res.json();
            const coaches = [];

            for (let i in data) {
                coaches.push({
                    id: i,
                    ...data[i]
                });
            }

            ctx.commit("setCoaches", coaches);
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