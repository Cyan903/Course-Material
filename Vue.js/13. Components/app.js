const app = Vue.createApp({
    data() {
        return {
            ppl: [
                {
                    name: "aa",
                    phone: 22,
                    email: 33
                },

                {
                    name: "ax",
                    phone: 22,
                    email: 33
                },

                {
                    name: "dsadasdsadasdsa",
                    phone: 432,
                    email: 432432
                },

                {
                    name: "basdas",
                    phone: 423432,
                    email: 33234
                }
            ]
        }
    },

    methods: {

    }
});


app.component("friend-contact", {
    template: `
        <li>
            <h2>{{ person.name }}</h2>
            <button @click="toggleDetail">Show Details</button>
            <ul v-if="detailsVisibility">
                <li><strong>Phone: </strong>{{ person.phone }}</li>
                <li><strong>Email: </strong>{{ person.email }}</li>
            </ul>
        </li>
    `,

    data() {
        return {
            detailsVisibility: false,
            person: {
                name: "basdas",
                phone: 423432,
                email: 33234
            }
        }
    },

    methods: {
        toggleDetail() {
            this.detailsVisibility = !this.detailsVisibility;
        }
    }
});


app.mount("#app");
