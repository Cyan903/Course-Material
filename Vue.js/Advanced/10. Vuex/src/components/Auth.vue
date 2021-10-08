<template>
    <div>
        <div v-if="isAuthed">
            <h2>Welcome {{ who }}</h2>
        </div>

        <h5>{{ who }}</h5>

        <button @click="changeLogin('cyanp')" v-if="!isAuthed">Login</button>
        <button @click="changeLogin(false)" v-else>Logout</button>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
    computed: {
        ...mapGetters("authModule", ["isAuthed", "who"])
    },

    methods: {
        ...mapMutations("authModule", ["changeLogin"])
    }
}
</script>