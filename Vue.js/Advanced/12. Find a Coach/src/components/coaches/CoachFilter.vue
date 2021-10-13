<template>
    <base-card>
        <h2>Find your coach</h2>
        <div class="filter-option">
            <input type="checkbox" id="frontend" checked @change="updateFilter" />
            <label for="frontend">Frontend</label>
        </div>
        <div class="filter-option">
            <input type="checkbox" id="backend" checked @change="updateFilter" />
            <label for="backend">Backend</label>
        </div><div class="filter-option">
            <input type="checkbox" id="career" checked @change="updateFilter" />
            <label for="career">Career</label>
        </div>
    </base-card>
</template>

<script>
export default {
    emits: ["change-filters"],
    data() {
        return {
            filters: {
                frontend: 0,
                backend: 0,
                career: 0
            }
        };
    },

    methods: {
        updateFilter(e) {
            const id = e.target.id;
            const active = e.target.checked;
            const filters = this.filters = {
                ...this.filters,
                [id]: active
            };

            this.filters = filters;

            this.$emit("change-filters", filters);
        }
    }
}
</script>

<style scoped>
h2 {
    margin: 0.5rem 0;
}

.filter-option {
    margin-right: 1rem;
}

.filter-option label,
.filter-option input {
    vertical-align: middle;
}

.filter-option label {
    margin-left: 0.25rem;
}

.filter-option.active label {
    font-weight: bold;
}
</style>