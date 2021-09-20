<template>
    <h2>Assignment 1</h2>

    <active-user
        :name="user.name"
        :age="user.age"
    ></active-user>
    
    <user-data
        @update-username="updateUser"
        @update-age="updateAge"
    ></user-data>
</template>


<script>
export default {
    data() {
        return {
            user: {
                name: "-",
                age: 0
            }
        }
    },

    methods: {
        updateUser(val) { this.user.name = val; },
        updateAge(val) { this.user.age = parseInt(val); }
    }
}
</script>