const app = Vue.createApp({
  data() {
    return {
      buttonhandlers: {
        mousemove: this.counterDO,
        click: this.counterDO
      },

      counter: 0,
    };
  },

  methods: {
    counterDO() {
      this.counter += 1;
    }
  }
});

app.mount('#events');
