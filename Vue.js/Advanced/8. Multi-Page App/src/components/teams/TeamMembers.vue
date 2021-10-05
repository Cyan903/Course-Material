<template>
  <section v-if="notfound">
    <span>
      <h2>Nothing found!</h2>
    </span>
  </section>
  <section v-else>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/2">GOTO 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ["users", "teams"],
  components: {
    UserItem
  },

  data() {
    return {
      notfound: false,
      teamName: "",
      members: [],
    };
  },

  methods: {
    updateRoute() {
      // this.$route.path
      const id = this.$route.params.id;
      const team = this.teams.filter(o => o.id == `t${id}`);
      
      if (team.length == 0) {
        this.notfound = true;
        return;
      }

      this.teamName = team[0].name;
      this.members = this.users.filter(o => team[0].members.includes(o.id));
    }
  },

  created() {
    this.updateRoute();
  },

  watch: {
    $route() {
      console.log(this.$route)
      this.updateRoute();
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

span {
  text-align: center;
}
</style>