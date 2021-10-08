<template>
    <button @click="add">Add</button>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    methods: mapMutations(["add"])
}
</script>