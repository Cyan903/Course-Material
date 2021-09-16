<template>
	<section>
		<h2>Users</h2>
		<ul>
			<li v-for="u in users" :key="u.id">
				<h2 style="display:inline;">{{ u.name }} </h2>
				<h3 style="display:inline;">{{ u.age }}</h3>
			</li>
		</ul>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				users: [
					{ id: 0, name: "a", age: 1 },
					{ id: 1, name: "b", age: 2 },
					{ id: 2, name: "c", age: 3 },
					{ id: 3, name: "d", age: 4 },
					{ id: 4, name: "e", age: 5 },
					{ id: 5, name: "f", age: 6 },
				]
			}
		}
	}
</script>