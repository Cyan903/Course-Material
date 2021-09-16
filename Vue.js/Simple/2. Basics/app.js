const app = Vue.createApp({
    data() {
        return {
            courseGoal: {a: {b: {d: [{ a: 5}]}}},
            morelink: "https://google.ca/",
            awaaga: 0,
            html1: "<h1>hvggg</h1>",
            html2: "<h1>is this good? :thinking:</h1>",
        }
    },

    methods: {
        getGoal() {
            return Math.round(Math.random()) ? "yea" : "NOOOOOOO";
        },

        updateGoal() {
            setInterval(() => {
                this.awaaga = Math.random();
            }, 200)
        }
    }
});

app.mount("#user-goal");