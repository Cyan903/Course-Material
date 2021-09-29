<template>
    <dialog open>
        <h2>Invalid params supplied!</h2>
        <h3>{{ value }}</h3>
        <slot></slot>
    </dialog>
</template>

<script>
export default {
    props: ["value"]
}
</script>