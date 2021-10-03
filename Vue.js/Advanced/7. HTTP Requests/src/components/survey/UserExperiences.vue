<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <ul>

        <div v-if="loaded">
          <survey-result
            v-for="result in results"
            :key="result.id"
            :name="result.name"
            :rating="result.rating"
          ></survey-result>
        </div>
        <div v-else>
          <h2>Loading</h2>
        </div>

        <div v-if="loaded && results.length == 0">
          <h2>Nothing to show!</h2>
        </div>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },

  data() {
    return { results: [], loaded: false }
  },

  mounted() {
    this.loadExperiences()
  },

  methods: {
    async loadExperiences() {
      this.loaded = false;
      const data = await fetch("dummy url").then(o => o.json());
      this.results.length = 0;

      for (let o in data) {
        this.results.push({
          id: data[o],
          name: data[o].name,
          rating: data[o].rating
        })
      }

      this.loaded = true;
      console.log(this.results);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>