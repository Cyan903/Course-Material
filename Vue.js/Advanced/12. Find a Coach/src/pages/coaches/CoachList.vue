<template>
    <CoachFilter @change-filters="setFilters" />
    <base-card>
        <section>
            <div class="controls">
                <base-button mode="outline">Refresh</base-button>
                <base-button v-if="!isCoach" link="true" to="/register">Register as Coach</base-button>
            </div>
            <ul v-if="hasCoaches">
                <CoachItem v-for="coach in filteredCoaches" :key="coach.id" :coach="coach" />
            </ul>
            <h3 v-else>No coach data!</h3>
        </section>
    </base-card>
</template>


<script>
import { mapGetters } from "vuex";
import CoachItem from "../../components/coaches/CoachItem.vue";
import CoachFilter from "../../components/coaches/CoachFilter.vue";

export default {
    components: { CoachItem, CoachFilter },

    data() {
        return {
            activeFilters: {
                frontend: true,
                backend: true,
                career: true
            }
        }
    },

    computed: {
        ...mapGetters("coaches", ["getCoaches", "hasCoaches"]),

        filteredCoaches() {
            return this.$store.getters["coaches/getCoaches"].filter(coach => {
                return ((this.activeFilters.frontend && coach.areas.includes("frontend")) || 
                        (this.activeFilters.backend && coach.areas.includes("backend")) || 
                        (this.activeFilters.career && coach.areas.includes("career")));
            });
        },

        isCoach() {
            return this.$store.getters["coaches/isCoach"];
        }
    },

    methods: {
        setFilters(m) {
            this.activeFilters = m;
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