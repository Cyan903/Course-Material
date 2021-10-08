<template>
    <div>
        <h3>{{ counter }}</h3>
        <h3>*2 = {{ $store.getters.timestwo }}</h3>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters(["counter"])
    }
}
</script>