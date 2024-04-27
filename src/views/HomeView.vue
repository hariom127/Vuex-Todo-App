<template>
  <div class="home">
    <AddTodoComponent />
    <FilterComponent />
    <TodoComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoComponent from "@/components/TodoComponent.vue";
import AddTodoComponent from "@/components/AddTodoComponent.vue";
import FilterComponent from "@/components/FilterComponent.vue";

export default {
  name: "HomeView",
  components: {
    TodoComponent,
    AddTodoComponent,
    FilterComponent,
  },
};
</script>
