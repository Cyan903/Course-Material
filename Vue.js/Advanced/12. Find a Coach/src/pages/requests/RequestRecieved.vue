<template>
    <section>
        <base-card>
            <header><h2>Recieved Requests</h2></header>
            <Spinner v-if="loading" />
            <ul v-else-if="hasRequests">
                <list-item
                    v-for="item in requests"
                    :key="item.id"
                    :email="item.email"
                    :message="item.message"
                ></list-item>
            </ul>
            <h3 v-else>No requests!</h3>
        </base-card>
    </section>
</template>

<script>
import Item from "../../components/requests/RequestItem.vue";
import Spinner from "../../components/base/Spinner.vue";

export default {
    data() {
        return {
            loading: true
        }
    },
    
    components: {
        "list-item": Item,
        Spinner
    },

    created() {
        this.loadAllRequests();
    },

    computed: {
        requests() {
            return this.$store.getters["requests/getRequests"];
        },

        hasRequests() {
            const req = this.$store.getters["requests/getRequests"];
            return req && req.length > 0;
        }
    },

    methods: {
        async loadAllRequests() {
            this.loading = true;
            await this.$store.dispatch("requests/loadAllRequests");
            this.loading = false;
        }
    }
};
</script>

<style scoped>
header {
    text-align: center;
}

ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    max-width: 30rem;
}

h3 {
    text-align: center;
}
</style>
