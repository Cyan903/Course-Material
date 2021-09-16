Vue.createApp({
    data() {
        return {
            goalItems: [],
            inputval: ""
        }
    },

    methods: {
        updateGoals() {
            this.goalItems.push(this.inputval);
            console.log(this.goalItems)

            this.inputval = "awaaagaaa"; // i am one billion steps ahead of you

        }
    }
}).mount("#app");