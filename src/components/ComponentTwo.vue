<script setup lang="ts">
import { useUser } from "../contexts/User";

const userContext = useUser();
</script>

<template>
  <div class="block">
    <h1>Reading Block</h1>
    <div>
      <p><strong>Name:</strong> {{ userContext.state.firstName }}</p>
      <p><strong>Last Name:</strong> {{ userContext.state.lastName }}</p>
      <p><strong>Full Name:</strong> {{ userContext.getters.fullName.value }}</p>
      <p><strong>Email:</strong> {{ userContext.state.email }}</p>
    </div>
  </div>
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
