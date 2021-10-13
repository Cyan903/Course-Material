<template>
    <div>
        <section>
            <base-card>
                <h2>{{ fullName }}</h2>
                <h3>${{ selectedCoaches.hourlyRate }}/hour</h3>
            </base-card>
        </section>
        <section>
            <base-card>
                <header>
                    <h2>Reach Out</h2>
                    <base-button link="true" :to="`${this.$route.path}/contact`">Contact</base-button>
                </header>
                <router-view></router-view>
            </base-card>
        </section>
        <section>
            <base-card>
                <base-badge v-for="area in selectedCoaches.areas" :key="area" :type="area" :title="area"></base-badge>
                <p>{{ selectedCoaches.description }}</p>
            </base-card>
        </section>
    </div>
</template>

<script>
export default {
    props: ["id"],
    data() {
        return {
            selectedCoaches: null
        }
    },

    computed: {
        fullName() {
            return this.selectedCoaches.firstName + " " + this.selectedCoaches.lastName;
        }
    },

    created() {
        this.selectedCoaches = this.$store.getters["coaches/getCoaches"].find(
            coach => coach.id == this.id
        );
    }
};
</script>
