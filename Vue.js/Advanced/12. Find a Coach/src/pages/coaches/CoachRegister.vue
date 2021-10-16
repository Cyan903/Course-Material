<template>
    <base-card>
        <h2>Register a Coach</h2>
        <CoachForm @post-data="postData" />
    </base-card>
</template>


<script>
import CoachForm from "../../components/coaches/CoachForm.vue";

export default {
    components: { CoachForm },
    methods: {
        postData(data) {
            this.$store.dispatch("coaches/addCoach", data);
            this.$router.replace("/coaches");
        }
    }
}
</script>