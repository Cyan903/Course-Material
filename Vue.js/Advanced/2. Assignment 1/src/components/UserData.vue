<template>
    <input type="text" @keyup="emitUsername" placeholder="Username">
    <input type="number" @keyup="emitAge"  placeholder="Age">
</template>

<script>
export default {
    emits: ["update-username", "update-age"],
    methods: {
        emitUsername(val) { this.$emit("update-username", val.target.value); },
        emitAge(val) { this.$emit("update-age", val.target.value); },
    }
}
</script>