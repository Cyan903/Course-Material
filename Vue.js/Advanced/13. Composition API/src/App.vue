<template>
	<section class="container">
		<h2>{{ userName }}</h2>
		<h2>{{ userName2 }}</h2>
		<h2>{{ nameAndAge }}</h2>

		<br />

		<h2>{{ user.name }}</h2>
		<h2>{{ user.age }}</h2>
		<h2>{{ uname }}</h2>

		<input type="text" v-model="userName">

		<button @click="funcs.changeAge">Change Age</button>
		<button @click="changeName">Change Name</button>
	</section>
</template>

<script>
import { reactive, ref, isRef, isReactive, toRefs, computed, watch } from "vue";

export default {
	setup() {
		let userName = ref("the username"); // seperate refs
		let userName2 = "the other username";
		let user = reactive({
			name: "name",
			age: 0,
		});

		setTimeout(() => {
			userName.value += " - "; // ref object
			userName2 += " - ";
			user.name += " - ";
			user.age++;

			console.log(isRef(userName));
			console.log(isReactive(user), user.name);
		}, 5000);

		// methods
		function changeAge() {
			user.age += 10;
		}

		function changeName() {
			user.name += " - ";
		}

		// computed
		const nameAndAge = computed(() => {
			return userName.value + " " + user.age;
		});

		// watchers
		watch([userName, toRefs(user).age], (o, n) => {
			console.log(o, n);
		});

		return {
			// data
			userName,
			userName2,
			user,
			uname: toRefs(user).name,
			
			// methods
			changeName,
			funcs: { changeAge },

			// computed
			nameAndAge
		};
	},
};
</script>

<style>
* {
	box-sizing: border-box;
}

html {
	font-family: sans-serif;
}

body {
	margin: 0;
}

.container {
	margin: 3rem auto;
	max-width: 30rem;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	padding: 1rem;
	text-align: center;
}
</style>
