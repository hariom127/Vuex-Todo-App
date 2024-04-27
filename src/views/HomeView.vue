<template>
  <div class="home">
    <AddTodoComponent />
    <TodoComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoComponent from "@/components/TodoComponent.vue";
import AddTodoComponent from "@/components/AddTodoComponent.vue";

export default {
  name: "HomeView",
  components: {
    TodoComponent,
    AddTodoComponent,
  },
};
</script>
