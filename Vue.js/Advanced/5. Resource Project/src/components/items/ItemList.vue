<template>
    <ul>
        <ItemCard v-for="item in items" :key="item.id" :item="item" />
        <h2 v-if="items.length == 0">There's nothing to show!</h2>
    </ul>
</template>

<script>
import ItemCard from "./ItemCard.vue";

export default {
    props: ["items"],

    components: {
        ItemCard
    }
}
</script>


<style scoped>
h2 {
    text-align: center;
    margin-bottom: 70vh;
}
</style>