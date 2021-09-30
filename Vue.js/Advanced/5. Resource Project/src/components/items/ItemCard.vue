<template>
    <li>
        <div class="item-headers">
            <h2>{{ item.name }}</h2>
            <span>({{ item.id }})</span>
        </div>
        
        <p><b>Description:</b> {{ item.description }}</p>

        <div class="item-buttons">
            <a @click="removeItem(item.id)" href="#">Remove</a>
            <a :href="item.url">{{ item.url.replace("https://", "") }}</a>
        </div>
    </li>
</template>

<script>
export default {
    props: ["item"],
    inject: ["removeItem"]
}
</script>

<style scoped>
li {
    list-style: none;
    border: 1px solid rgb(102, 102, 102);
    border-radius: 10px;
    width: 80%;
    max-width: 1500px;
    margin: auto;
    margin-bottom: 30px;
    padding: 1em;
}

.item-headers h2 {
    display: inline;
    margin-right: 10px;
}

.item-buttons {
    margin-top: 30px;
}

a {
    margin-right: 10px;
}
</style>