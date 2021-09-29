<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <slot name="goalName" :item="goal"></slot>
        </li>
    </ul>
</template>

<script>
export default {
    props: ["goals"]
}
</script>