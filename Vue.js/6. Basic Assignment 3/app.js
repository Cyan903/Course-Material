Vue.createApp({
    data() {
        return {
            value: 0,
            timer: null
        }
    },

    computed: {
        getVal() {
            if (this.value == 37) return "OK";
            return this.value < 37 ? "Not there yet" : "Too much!";
        }
    },

    watch: {
        value() {
            if (this.timer) clearInterval(this.timer);
            
            this.timer = setTimeout(() => {
                this.value = 0;
            }, 5000)
        }
    },

    methods: {
        add(n) {
            this.value += n;
        }
    }
}).mount("#assignment");


// execute code cuz somthing changed = watcher
// compute something dynamically = computed