<template>
    <li v-if="!removed">
        <h2>{{ name }}</h2>
        <button @click="toggleDetails">{{ detail }} Details</button>
        <button @click="removeFriend">Remove Friend</button>
        <button @click="toggleFav">Fav</button>
        <ul v-if="detailsAreVisible">
            <li>ID: {{ id }}</li>
            <li>Age: {{ age }}</li>
            <li v-if="fav">{{ fav ? "faved" : ":(" }}</li>
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
        fav: Boolean,
        removed: Boolean
        // fav: {
        //     type: Boolean,
        //     required: true,
        //     // default: false,
        //     default() {
        //         return false
        //     },
        //     validator(v) {
        //         return [true, false].includes(v);
        //     }
        // }
    },

    // this isn't required.
    // its for other devs
    // you can validate it
    // emits: ["change-fav"],
    emits: {
        "change-fav"(id) {
            console.log(id);
            return true;
        }
    },

    data() {
        return {
            detailsAreVisible: false,
        }
    },

    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },

        toggleFav() {
            this.$emit("change-fav", this.id);
        },

        removeFriend() {
            this.$emit("remove-friend", this.id);
        }
    },

    computed: {
        detail() {
            return this.detailsAreVisible ? "Hide" : "Show";
        }
    }
}
</script>
