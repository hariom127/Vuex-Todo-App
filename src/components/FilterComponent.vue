<template>
  <div>
    Filter Todos:
    <select v-model="selectedOption" @change="filter()">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>
  
  <script>
import { mapActions } from "vuex";
export default {
  name: "FilterComponent",
  data() {
    return {
      selectedOption: 5,
    };
  },
  methods: {
    ...mapActions(["fetchTodos"]),
    filter() {
      console.log("Selected Option:", this.selectedOption);
      this.fetchTodos(this.selectedOption);
    },
  },
};
</script>
  
  <style scoped>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>