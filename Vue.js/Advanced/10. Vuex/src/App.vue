<template>
  <div>
    <base-container title="Vuex" v-if="isAuthed">
      <ShowCounter />
      <ChangeCounter />

      <button @click="increase">Increase by 10</button>
    </base-container>

    <base-container name="login">
      <Auth />
    </base-container>
  </div>
</template>

<script>
import Auth from "./components/Auth.vue";
import BaseContainer from './components/BaseContainer.vue';
import ShowCounter from "./components/ShowCounter.vue";
import ChangeCounter from './components/ChangeCounter.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    Auth,
    BaseContainer,
    ShowCounter,
    ChangeCounter,
  },

  mounted() {
    this.$store.dispatch({
      type: "add"
    })
  },

  methods: {
    increase() {
      this.$store.commit("increase", 10);
    }
  },

  computed: {
    ...mapGetters("authModule", ["isAuthed"]),
  }
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
</style>