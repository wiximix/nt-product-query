<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <product-table msg="新合产品查询系统" />
  </div>
</template>

<script>
import ProductTable from "./components/ProductTable.vue";

export default {
  name: "app",
  components: {
    ProductTable
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
