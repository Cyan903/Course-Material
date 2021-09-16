const app = Vue.createApp({
  data() {
    return {
      inputParams: "",
      goals: []
    };
  },

  computed: {
    goalsIsEmpty() {
      return this.goals.length === 0;
    }
  },

  methods: {
    addGoal() {
      this.goals.push(this.inputParams);
      console.log(this.goals)
    },

    removeGoal(n) {
      this.goals.splice(n, 1);
    }
  }
});

app.mount('#user-goals');
