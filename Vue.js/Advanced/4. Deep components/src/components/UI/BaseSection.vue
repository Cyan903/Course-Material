<template>
  <div>
    <div id="aaa">
      <h2>{{ title }}</h2>
      <br>
      <slot></slot>
    </div>

    <header>
      <slot name="header">
        <h2>Nothing was put into the header</h2>
      </slot>
    </header>
  </div>

</template>

<script>
export default {
  props: ["title"],

  mounted() {
    console.table(this)
  }
}
</script>


<style scoped>
#aaa {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  background-color: blue;
}

header {
  background-color: red;
}


</style>