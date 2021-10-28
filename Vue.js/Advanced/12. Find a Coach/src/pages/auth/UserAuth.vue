<template>
    <div>
        <Spinner v-if="loading" />
        <base-card v-else>
            <form @submit.prevent="">
                <div class="form-control">
                    <label for="email">Email</label>
                    <input type="emil" id="email" v-model.trim="email" />
                </div>
                <div class="form-control">
                    <label for="password">Password</label>
                    <input type="password" id="password" v-model="password" />
                </div>
                <!-- <p v-if="valid">Enter a valid email and password!</p> -->
                <button @click="submit">{{ submitBtn }}</button>
                <base-button type="button" mode="flat" @click="switchMode"
                    >{{ switchBtn }} instead!</base-button
                >
            </form>
        </base-card>
    </div>
</template>

<script>
import Spinner from "../../components/base/Spinner.vue";

export default {
    components: { Spinner },
    data() {
        return {
            email: "",
            password: "",
            mode: "login",
            // valid: true,
            loading: false
        };
    },

    computed: {
        switchBtn() {
            return this.mode == "login" ? "Signup" : "Login";
        },

        submitBtn() {
            return this.mode != "login" ? "Signup" : "Login";
        }
    },

    methods: {
        async submit() {
            // if (!this.email || !this.password.length <= ) {
            //     this.valid = false;
            //     return;
            // }

            const payload = {
                email: this.email,
                password: this.password
            };
            
            this.loading = true;

            if (this.mode == "signup") {
                await this.$store.dispatch("signup", payload);
            } else {
                await this.$store.dispatch("login", payload);
            }

            this.loading = false;
            this.$router.replace("/coaches");
        },

        switchMode() {
            this.mode = this.mode == "login" ? "signup" : "login";
        }
    }
};
</script>

<style scoped>
@import "../../../public/css/form.css";

form {
    border: 0px solid #fff !important;
}
</style>
