<script setup lang="ts">
import { ref } from "vue";
import { useUser } from "../contexts/User";

const inputFirstName = ref<HTMLInputElement>();
const inputLastName = ref<HTMLInputElement>();

const userContext = useUser();

const handleFormSubmit = () => {
  if (!inputFirstName?.value || !inputLastName?.value) {
    return;
  }

  userContext.actions.setFirstName(inputFirstName.value.value.trim());
  userContext.actions.setLastName(inputLastName.value.value.trim());
};
</script>

<template>
  <form class="block" @submit.prevent="handleFormSubmit">
    <h1>Update Block</h1>
    <label>First Name</label>
    <input
      type="text"
      ref="inputFirstName"
      autocomplete="userFirstName"
      :value="userContext.state.firstName"
    />
    <label>Last Name</label>
    <input
      type="text"
      ref="inputLastName"
      autocomplete="userLastName"
      :value="userContext.state.lastName"
    />
    <button type="submit">Update</button>
  </form>
</template>

<style scoped>
.block {
  width: 400px;
  border: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 0 auto;
  padding: 15px;
  box-sizing: border-box;
}
</style>
