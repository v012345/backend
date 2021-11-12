<template>
  <div id="app">
    <router-link to="/home">home</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted() {
    this.$axios
      .post("https://api.nightowl.name/api/test", { a: 1 })
      .then((r) => {
        console.log(r);
      });
  },
};
</script>

<style>
</style>
