<template>
    <dialog open>
        <h2>Invalid params supplied!</h2>
        <h3>{{ value }}</h3>
        <button @click="confirmError">Ok</button>
    </dialog>
</template>

<script>
export default {
    props: ["value"],
    inject: ["confirmError"]
}
</script>