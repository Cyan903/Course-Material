<template>
    <header>
        <nav>
            <h1><router-link to="/">Coach Finder</router-link></h1>
            <ul>
                <li><router-link to="/coaches">All Coaches</router-link></li>
                <li v-if="loggedIn">
                    <router-link to="/requests">Requests</router-link>
                </li>
                <li v-else>
                    <router-link to="/auth">Login</router-link>
                </li>
                <li v-if="loggedIn">
                    <base-button @click="logout">Logout</base-button>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    computed: {
        loggedIn() {
            return this.$store.getters.authenticated;
        }
    },
    
    methods: {
        logout() {
            this.$store.dispatch("logout");
            this.$router.replace("/auth");
        }
    }
}
</script>

<style scoped>
@import url("../../../public/css/header.css");
</style>