Vue.createApp({
    data() {
        return {
            userinput: "",
            paragraph: true,
            color: ""
        }
    },

    methods: {
        toggleParagraph() { this.paragraph = !this.paragraph; }
    }
}).mount("#assignment");