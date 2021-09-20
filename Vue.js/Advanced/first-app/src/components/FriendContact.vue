<template>
    <li>
        <h2>{{ name }}</h2>
        <button @click="toggleDetails">{{ detail }} Details</button>
        <button @click="toggleFav">Fav</button>
        <ul v-if="detailsAreVisible">
            <li>ID: {{ id }}</li>
            <li>Age: {{ age }}</li>
            <li v-if="favF">FAVED</li>
        </ul>
    </li>
</template>

<style>
    ul {
        color: red;
    }

    h2 {
        color: blue;
    }
</style>

<script>
export default {
    // props: ["id", "name", "age", "fav"],
    props: {
        id: {
            type: Number,
            required: true
        },

        name: String,
        age: Number,
        fav: {
            type: Boolean,
            required: false,
            // default: false,
            default() {
                return false
            },
            validator(v) {
                return [true, false].includes(v);
            }
        }
    },

    data() {
        return {
            detailsAreVisible: false,
            favF: this.fav,
        }
    },

    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },

        toggleFav() {
            this.favF = !this.fav;
        }
    },

    computed: {
        detail() {
            return this.detailsAreVisible ? "Hide" : "Show";
        }
    }
}
</script>
