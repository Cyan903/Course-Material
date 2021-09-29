<template>
  <div>
    <!-- <the-header></the-header> -->
    <TheHeader />


    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>

    <Goal :goals="goals">
      <template #goalName="sprops">
        <h2>{{ sprops.item }}</h2>
      </template>
    </Goal>




    <!-- <keep-alive> to preserve input params and stuff -->
    <keep-alive>
      <component :is="currentGoalCmp" />
    </keep-alive>

    <button @click="currentGoalCmp = 'ActiveGoals'">Active Goals</button>
    <button @click="currentGoalCmp = 'ManagedGoals'">Managed Goals</button>

  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import Goal from "./components/Goals.vue";

import ActiveGoals from "./components/ActiveGoals.vue";
import ManagedGoals from "./components/ManagedGoals.vue";


export default {
  components: {
    // "the-header": TheHeader
    TheHeader,
    Goal,
    ActiveGoals,
    ManagedGoals
  },

  data() {
    return {
      currentGoalCmp: "ActiveGoals",
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },

      goals: [
        "a",
        "b",
        "c"
      ]
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>