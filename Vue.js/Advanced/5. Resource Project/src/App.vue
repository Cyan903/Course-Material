<template>
    <div>
        <Header />

        <Alert :value="err" v-if="err" />
        <Page :resources="resources" />
        
        <Footer />
    </div>
</template>

<script>
import Header from "./components/ui/Header.vue";
import Footer from "./components/ui/Footer.vue";
import Page from "./components/ui/Page.vue";
import Alert from "./components/ui/Alert.vue";

export default {
    components: { Header, Page, Footer, Alert },

    provide() {
        return {
            removeItem: this.removeItem,
            addItem: this.addItem,
            confirmError: this.confirmError
        }
    },

    data() {
        return {
            err: false,
            resources: [
                { id: 0, name: "-", description: "A resource.",  url: "localhost" },
                { id: 1, name: "b", description: "A resource.",  url: "localhost" },
                { id: 2, name: "c", description: "A resource.",  url: "localhost" },
                { id: 3, name: "c", description: "A resource.",  url: "localhost" },
                { id: 4, name: "c", description: "A resource.",  url: "https://google.ca" },
                { id: 5, name: "c", description: "A resource.",  url: "localhost" }
            ]
        }
    },

    methods: {
        removeItem(id) {
            console.log(`removing id-${id}`);
            this.resources = this.resources.filter(o => o.id != id);
        },

        addItem(name, desc, url) {
            if ([name, desc, url].includes("")) {
                this.err = "Params cannot be blank!";
                return
            }

            const id = this.resources.length > 0 ? this.resources[this.resources.length-1].id+1 : 1;
            this.resources.push({
                id, name, description: desc, url
            });

            console.log(this.resources[this.resources.length-1].id)
        },
        
        confirmError() {
            this.err = false
        }
    }
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
}
</style>