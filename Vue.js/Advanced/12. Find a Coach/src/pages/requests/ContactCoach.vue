<template>
    <form @submit.prevent="submit">
        <div class="form-control">
            <label for="email">Email</label>
            <input type="email" v-model.trim="email" id="email" />
        </div>
        <div class="form-control">
            <label for="message">Message</label>
            <textarea
                id="message"
                v-model="message"
                cols="30"
                rows="10"
            ></textarea>
        </div>
        <div class="actions" v-if="formValid">
            <base-button>Send Message</base-button>
        </div>
        <div v-else>
            <p>Form isn't valid!</p>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            message: "",
            formValid: true
        };
    },

    methods: {
        submit() {
            if (!this.email.includes("@")) {
                this.formValid = false;
                return;
            }

            this.$store.dispatch("requests/insertCoach", {
                id: new Date().toISOString(),
                email: this.email,
                message: this.message,
                coachid: this.$route.params.id
            });

            this.$router.replace("/coaches");
        }
    }
};
</script>

<style scoped>
@import "../../../public/css/form.css";

.errors {
    font-weight: bold;
    color: red;
}

.actions {
    text-align: center;
}
</style>
