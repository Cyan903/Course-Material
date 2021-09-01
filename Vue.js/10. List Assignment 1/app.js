Vue.createApp({
    data() {
        return {
            taskinfo: "",
            tasks: [],
            visible: true
        }
    },
    
    computed: {
        shown() {
            return this.visible ? "Hide" : "Show";
        }
    },

    methods: {
        addTask() {
            this.tasks.push(this.taskinfo);
        },

        showhide() {
            this.visible = !this.visible;
        }
    }
}).mount("#assignment")