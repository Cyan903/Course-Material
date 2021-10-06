<template>
  <div>
    <div>
      <input type="text" v-model="inputVal" />
      <br />
      <button @click="addUser">Add User</button>
    </div>
    <ul>
      <transition-group>
        <li v-for="user in users" :key="user" @click="removeUser(user)">
          {{ user }}
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputVal: '',
      users: ['a', 'b', 'c', 'd']
    };
  },

  methods: {
    addUser() {
      this.users.push(this.inputVal);
    },

    removeUser(id) {
      this.users = this.users.filter(o => o != id);
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  margin: 0;
}

li {
  text-align: center;
  border: 1px solid #eee;
  padding: 1em;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.v-enter-active,
.v-leave-active {
  transition: all 1s ease-in-out;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.v-move {
  transition: transform 0.8 ease;
}
</style>
