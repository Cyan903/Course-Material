<template>
    <form @submit.prevent="submit">
        <div class="form-control">
            <label for="firstname">First Name</label>
            <input
                type="text"
                id="firstname"
                v-model.trim="firstName"
                @blur="validateForm"
            />
        </div>
        <div class="form-control">
            <label for="lastname">Last Name</label>
            <input
                type="text"
                id="lastname"
                v-model.trim="lastName"
                @blur="validateForm"
            />
        </div>
        <div class="form-control">
            <label for="description">Description</label>
            <textarea
                id="description"
                cols="30"
                rows="10"
                v-model="description"
                @blur="validateForm"
            ></textarea>
        </div>
        <div class="form-control">
            <label for="rate">Rate</label>
            <input
                type="number"
                id="rate"
                v-model="rate"
                @blur="validateForm"
            />
        </div>
        <div class="form-control">
            <h3>Areas of Expertise</h3>
            <div>
                <input
                    type="checkbox"
                    id="frontend"
                    value="frontend"
                    v-model="areas"
                    @blur="validateForm"
                />
                <label for="frontend">Frontend</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="backend"
                    value="backend"
                    v-model="areas"
                    @blur="validateForm"
                />
                <label for="backend">Backend</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="career"
                    value="career"
                    v-model="areas"
                    @blur="validateForm"
                />
                <label for="career">Career</label>
            </div>
        </div>

        <p v-if="!formValid">Form is invalid!</p>
        <input type="submit" value="Submit" :disabled="!formValid" />
    </form>
</template>

<script>
export default {
    emits: ['post-data'],
    data() {
        return {
            firstName: '',
            lastName: '',
            description: '',
            rate: null,
            areas: [],
            formValid: true,
        };
    },

    methods: {
        validateForm() {
            const { firstName, lastName, description, rate, areas } = this;

            if (
                [firstName, lastName, description].includes('') ||
                rate == null ||
                areas.length == 0
            ) {
                this.formValid = false;
                return;
            }

            this.formValid = true;
        },

        submit() {
            const { firstName, lastName, description, rate, areas } = this;
            const data = {
                firstName,
                lastName,
                description,
                rate,
                areas,
            };

            this.$emit('post-data', data);
        },
    },
};
</script>

<style scoped>
.form-control {
    margin: 0.5rem 0;
}

label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
    font-weight: normal;
    display: inline;
    margin: 0 0 0 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
}

input:focus,
textarea:focus {
    background-color: #f0e6fd;
    outline: none;
    border-color: #3d008d;
}

input[type='checkbox'] {
    display: inline;
    width: auto;
    border: none;
}

input[type='checkbox']:focus {
    outline: #3d008d solid 1px;
}

h3 {
    margin: 0.5rem 0;
    font-size: 1rem;
}

.invalid label {
    color: red;
}

.invalid input,
.invalid textarea {
    border: 1px solid red;
}
</style>
