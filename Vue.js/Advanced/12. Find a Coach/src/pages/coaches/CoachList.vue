<template>
    <div>
        <CoachFilter @change-filters="setFilters" />
        <base-card>
            <section>
                <div class="controls">
                    <base-button mode="outline" @click="loadCoaches"
                        >Refresh</base-button
                    >
                    <base-button link="link" to="/auth" v-if="!loggedIn">Login</base-button>
                    <base-button v-else-if="!isCoach && loggedIn" link="true" to="/register"
                        >Register as Coach</base-button
                    >
                </div>
                <div v-if="loading">
                    <Spinner />
                </div>
                <ul v-else-if="hasCoaches">
                    <CoachItem
                        v-for="coach in filteredCoaches"
                        :key="coach.id"
                        :coach="coach"
                    />
                </ul>
                <h3 v-else>No coach data!</h3>
            </section>
        </base-card>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import CoachItem from "../../components/coaches/CoachItem.vue";
import CoachFilter from "../../components/coaches/CoachFilter.vue";
import Spinner from "../../components/base/Spinner.vue";

export default {
    components: { CoachItem, CoachFilter, Spinner },

    data() {
        return {
            loading: true,
            activeFilters: {
                frontend: true,
                backend: true,
                career: true
            }
        };
    },

    created() {
        this.loadCoaches();
    },

    computed: {
        ...mapGetters("coaches", ["getCoaches", "hasCoaches"]),
        loggedIn() {
            return this.$store.getters.authenticated;
        },

        filteredCoaches() {
            return this.$store.getters["coaches/getCoaches"].filter(coach => {
                return (
                    (this.activeFilters.frontend &&
                        coach.areas.includes("frontend")) ||
                    (this.activeFilters.backend &&
                        coach.areas.includes("backend")) ||
                    (this.activeFilters.career &&
                        coach.areas.includes("career"))
                );
            });
        },

        isCoach() {
            return this.$store.getters["coaches/isCoach"];
        }
    },

    methods: {
        setFilters(m) {
            this.activeFilters = m;
        },

        async loadCoaches() {
            this.loading = true;
            await this.$store.dispatch("coaches/loadFromDB");
            this.loading = false;
        }
    }
};
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
