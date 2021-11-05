<template>
	<section>
		<form @submit.prevent="addExpense">
			<div>
				<label for="amount">Amount</label>
				<input id="amount" type="number" v-model="enteredExpense" />
			</div>
			<button>Add Expense</button>
		</form>
	</section>
</template>

<script>
import { inject } from "vue";

export default {
    setup() {
        const enteredExpense = inject("enteredExpense");
        const addExpense = inject("addExpense");

        return { enteredExpense, addExpense}
    },
}
</script>