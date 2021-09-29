<template>
  <section>
    <section-styles title="UserInfo"></section-styles>
    <section-styles title="UserInfo">
      <template #header>
        <h2>{{ 2+2 }}</h2>
      </template>

      <header>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </header>
      <p>{{ infoText }}</p>
    </section-styles>
  </section>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>

<style scoped>
section div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>