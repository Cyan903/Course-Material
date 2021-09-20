<template>
	<section>
		<h2>Users</h2>
		<ul>
			<li v-for="u in users" :key="u.id">
				<contact-comp
					:name="u.name"
					:age="u.age"
					:id="u.id"
					:fav="u.fav"
					:removed="u.removed"

					@change-fav="toggleFav"
					@remove-friend="removeFriend"
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
					{ removed: false, fav: false, id: 0, name: "OH", age: 1 },
					{ removed: false, fav: false, id: 1, name: "b", age: 2 },
					{ removed: false, fav: false, id: 2, name: "c", age: 3 },
					{ removed: false, fav: false, id: 3, name: "d", age: 4 },
					{ removed: false, fav: false, id: 4, name: "e", age: 5 },
					{ removed: false, fav: false, id: 5, name: "f", age: 6 },
				]
			}
		},

		methods: {
			addUser() {
				this.users.push({
					id: this.users[this.users.length-1].id+1,
					name: prompt("Enter name:"),
					age: parseInt(prompt("Enter age:")),
					fav: false,
					removed: false
				})
			},

			toggleFav(id) {
				this.users[id].fav = !this.users[id].fav; 
			},

			removeFriend(id) {
				this.users[id].removed = true;
			}
		}
	}
</script>