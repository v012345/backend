<template>
  <div>
    <el-form status-icon label-width="120px">
      <el-form-item label="Password" prop="pass">
        <el-input v-model="payload.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Confirm" prop="checkPass">
        <el-input v-model="payload.id" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Age" prop="age">
        <el-input v-model="payload.belongTo" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">Submit</el-button>
        <el-button @click="resetForm">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      payload: {
        name: "",
        id: "",
        belongTo: "",
      },
    };
  },
  methods: {
    submitForm() {
      // console.log(this.payload);
      // this.$bus.$emit("menu_add", this.payload);
    },
    resetForm() {
      this.payload = {
        name: "",
        id: "",
        belongTo: "",
      };
    },
  },
};
</script>

<style lang="less" scoped>
</style>