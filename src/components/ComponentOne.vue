<script setup lang="ts">
import { inject, ref } from "vue";
import { UserActionsKey } from "../contexts/User";

const inputNameValue = ref("");
const inputEmailValue = ref("");

const userActions = inject(UserActionsKey);

const handleFormSubmit = () => {
  userActions?.setName(inputNameValue.value);
  userActions?.setEmail(inputEmailValue.value);

  inputNameValue.value = "";
  inputEmailValue.value = "";
};
</script>

<template>
  <form class="block" @submit.prevent="handleFormSubmit">
    <h1>Update Block</h1>
    <label>Name</label>
    <input type="text" v-model="inputNameValue" />
    <label>Email</label>
    <input type="text" v-model="inputEmailValue" />
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
