<template>
    <div>
        <Header />
        <router-view v-slot="slotProps">
            <transition mode="out-in">
                <component :is="slotProps.Component"></component>
            </transition>
        </router-view>
    </div>
</template>

<script>
import Header from "./components/layout/Header.vue";

export default {
    components: { Header },
    created() {
        this.$store.dispatch("attemptAutoLogin");
    },

    computed: {
        autoLogout() {
            return this.$store.getters.didAutoLogout;
        }
    },

    watch: {
        autoLogout(n, old) {
            if (n && n != old) {
                this.$router.replace("/coaches");
            }
        }
    }
};
</script>

<style scoped>
@import url("../public/css/app.css");

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.v-enter-to,
.v-leave-from {
    opacity: 1;
}

.v-enter-active,
.v-leave-active {
    transition: all 0.2s ease-in-out;
}
</style>
