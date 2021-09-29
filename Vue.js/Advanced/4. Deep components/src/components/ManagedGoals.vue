<template>
    <div>
        <h2>Managed Goals</h2>
        <input type="text" v-model="input">
        <button @click="updateText">Update</button>

        <teleport to="body">
            <alert-btn v-if="showing" :value="input">
                <button @click="showing = false">Close</button>
            </alert-btn>
        </teleport>
    </div>
</template>


<script>
import Alert from "./Alert.vue";

export default {
    components: {
        "alert-btn": Alert
    },

    data() {
        return {
            input: "",
            showing: false
        }
    },

    methods: {
        updateText() {
           this.showing = this.input.length <= 0
        }
    }
}
</script>