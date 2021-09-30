<template>
    <div>
        <div id="buttons">
            <button @click="res = 'ItemList'">Current Resources</button>
            <button @click="res = 'ItemAdd'">Add Resource</button>
        </div>
        
        <keep-alive>
            <component :is="res" :items="resources" />
        </keep-alive>
    </div>
</template>

<script>
import ItemList from "../items/ItemList.vue";
import ItemAdd from "../items/ItemAdd.vue";

export default {
    props: ["resources"],
    components: { ItemList, ItemAdd },
    
    data() {
        return {
            res: "ItemList"
        }
    }
}
</script>


<style scoped>
#buttons {
    display: block;
    text-align: center;
    padding: 1em;
}
</style>