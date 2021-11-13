<template>
  <div id="app">
    <router-link to="/home">home</router-link>
    <router-view></router-view>
    <Backend></Backend>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="Date" width="180"> </el-table-column>
      <el-table-column prop="name" label="Name" width="180"> </el-table-column>
      <el-table-column prop="address" label="Address"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Backend from "./components/Backend/Menu/index.vue";
export default {
  components: {
    Backend,
  },
  beforeMount() {
    console.log(process.env.VUE_APP_API);
    this.$bus.$on("backend_menu_add_done", (data) => {
      this.$axios
        .post(process.env.VUE_APP_API + "main_menus", data)
        .then((r) => {
          console.log(r);
        });
    });
  },

  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
      ],
    };
  },
  name: "App",
};
</script>

<style>
</style>
