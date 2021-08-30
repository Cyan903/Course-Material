const app = Vue.createApp({
  data() {
    return {
      n: 0,
      counter: 0,
      user: "-"
    };
  },

  computed: {
    // computed values are sort of getters
    getusername() {
      return this.user;
    }
  },

  watch: {
    user(n) {
      console.log("name has changed ?")
      console.log("name is now"+n)
    }
  },

  methods: {
    add() {
      this.counter += parseInt(this.n);
    },

    sub() {
      this.counter -= parseInt(this.n);
    },

    updateN(e) {
      this.n = e.target.value;
    },

    username(e, last) {
      this.user = e.target.value+" "+last;
    },

    reset() {
      this.user = "-"
    }
  }
});

app.mount('#events');

// execute code cuz somthing changed = watcher
// compute something dynamically = computed