<template>
    <section>
        <base-card>
            <header><h2>Recieved Requests</h2></header>
            <ul v-if="hasRequests">
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

export default {
    components: {
        "list-item": Item
    },

    computed: {
        requests() {
            return this.$store.getters["requests/getRequests"];
        },

        hasRequests() {
            const req = this.$store.getters["requests/getRequests"];
            return req && req.length > 0;
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
