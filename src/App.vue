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
    new Promise((resolve) => {
      console.log("new Promise");
      resolve();
    })
      .then(() => {
        console.log("then1");
        return new Promise((r) => {
          setTimeout(() => {
            console.log("then3");
            r("11111111111");
          }, 2000);
        });
      })
      .then((r) => {
        console.log("then2" + r);
      });

    console.log("not a Promise");
  },
};
</script>

<style>
</style>
