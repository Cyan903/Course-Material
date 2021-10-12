<template>
    <div>
        <Header />
        <h2>Hello world</h2>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from "./components/layout/Header.vue";

export default {
    components: {
        Header
    }
}
</script>


<style scoped>
@import url("../public/css/app.css");
</style>