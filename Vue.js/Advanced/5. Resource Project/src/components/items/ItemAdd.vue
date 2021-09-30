<template>
    <div id="wrap">
        <form>
            <h2>Add Resource</h2>
            <div>
                <label>Name</label>
                <input v-model="name" type="text" placeholder="Enter Name">
            </div>

            <div>
                <label>Description</label>
                <input v-model="desc" type="text" placeholder="Enter Description">
            </div>

            <div>
                <label>URL</label>
                <input v-model="url" type="text" placeholder="Enter URL">
            </div>

            <input type="submit" value="Add" @contextmenu="a" @click.prevent="addItem(name, desc, url)">
        </form>
    </div>
</template>

<script>
export default {
    inject: ["addItem"],
    data() {
        return {
            name: "",
            desc: "",
            url: ""
        }
    }
}
</script>

<style scoped>
/* you would usually use CSS classes but I'm focusing on vue so */
form {
    border: 1px solid rgb(102, 102, 102);
    border-radius: 10px;
    display: inline-block;
    max-width: 1500px;
    text-align: left;;
    margin-bottom: 30px;
    padding: 1em;
    margin-bottom: 50vh;
}

form div {
    margin-bottom: 20px;
}

label {
    font-weight: bolder;
}

#wrap {
    text-align: center;;
    width: 100%;
}
</style>