<template>
    <div>
        <section>Filters</section>
        <section>
            <div class="controls">
                <button>Refresh</button>
                <router-link to="/register">Register as Coach</router-link>
            </div>
            <ul v-if="hasCoaches">
                <CoachItem v-for="coach in getCoaches" :key="coach.id" :coach="coach" />
            </ul>
            <h3 v-else>No coach data!</h3>
        </section>
    </div>
</template>


<script>
import { mapGetters } from "vuex";
import CoachItem from "../../components/coaches/CoachItem.vue";

export default {
    components: { CoachItem },

    computed: {
        ...mapGetters("coaches", ["getCoaches", "hasCoaches"]),

        filteredCoaches() {
            return this.$store.getters["coaches/getCoaches"];
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.controls {
    display: flex;
    justify-content: space-between;
}
</style>