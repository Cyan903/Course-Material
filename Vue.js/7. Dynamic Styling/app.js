Vue.createApp({
    data() {
        return {
            boxA: false,
            boxB: false,
            boxC: false,
            boxD: false
        }
    },

    computed: {
        boxDCSS() {
            return this.boxD ? "active" : "";
        }
    },

    methods: {
        toggle(n) {
            this[n] = !this[n];
        }
    }
}).mount("#styling")