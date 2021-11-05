<template>
	<section>
		<div>Available Funds: {{ availableFunds }}</div>
		<div>Total Expenses: {{ currentExpenses }}</div>
		<hr />
		<div>Funds left: {{ remainingFunds }}</div>
	</section>
</template>

<script>
import { computed, watch } from "vue";

export default {
	props: ["availableFunds", "currentExpenses"],
	setup(props) {
		// Computed
		const remainingFunds = computed(
			() => props.availableFunds - props.currentExpenses
		);

		// Watchers
		watch(remainingFunds, (val) => {
			if (val < 0) {
				alert("You are broke!");
			}
		});

        return { remainingFunds }
	},
};
</script>
