const app = Vue.createApp({
  template: `
    <h2>How Vue Works</h2>
    <input type="text" ref="userinput">
    <button @click="setText">Set Text</button>
    <p>{{ message }}</p>
  `,
  data() {
    return {
      message: 'Vue is great!',
    };
  },
  methods: {
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userinput.value;
    },
  },
});

app.mount('#app');
