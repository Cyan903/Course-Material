<template>
    <li>
        <h3>{{ fullName }}</h3>
        <h4>${{ hourlyRate }}/hour</h4>
        <div>
            <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
        </div>
        <div class="actions">
            <base-button link="true" mode="outline" :to="`/coaches/${id}/contact`">Contact</base-button>
            <base-button link="true" mode="outline" :to="`/coaches/${id}`">Details</base-button>
        </div>
    </li>
</template>

<script>
export default {
    props: ["coach"],
    data() {
        return { ...this.coach };
    },

    computed: {
        fullName() {
            return this.firstName + " " + this.lastName;
        }
    }
}
</script>

<style scoped>
li {
    margin: 1rem 0;
    border: 1px solid #424242;
    border-radius: 12px;
    padding: 1rem;
}

h3 {
    font-size: 1.5rem;
}

h3,
h4 {
    margin: 0.5rem 0;
}

div {
    margin: 0.5rem 0;
}

.actions {
    display: flex;
    justify-content: flex-end;
}
</style>