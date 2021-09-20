<template>
	<section>
		<h2>Users</h2>
		<ul>
			<li v-for="u in users" :key="u.id">
				<contact-comp
					:name="u.name"
					:age="u.age"
					:id="u.id"
				></contact-comp>
			</li>
		</ul>

		<button @click="addUser">Add</button>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				users: [
					{ fav: false, id: 0, name: "OH", age: 1 },
					{ fav: false, id: 1, name: "b", age: 2 },
					{ fav: false, id: 2, name: "c", age: 3 },
					{ fav: false, id: 3, name: "d", age: 4 },
					{ fav: false, id: 4, name: "e", age: 5 },
					{ fav: false, id: 5, name: "f", age: 6 },
				]
			}
		},

		methods: {
			addUser() {
				this.users.push({
					id: this.users[this.users.length-1].id+1,
					name: prompt("Enter name:"),
					age: parseInt(prompt("Enter age:")),
					fav: false
				})
			}
		}
	}
</script>