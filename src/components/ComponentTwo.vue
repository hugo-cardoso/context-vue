<script setup lang="ts">
import { inject } from "vue";
import { UserStateKey } from "../contexts/User";

const userState = inject(UserStateKey);
</script>

<template>
  <div class="block">
    <h1>Reading Block</h1>
    <div>
      <p><strong>Name:</strong> {{ userState?.name.value }}</p>
      <p><strong>Email:</strong> {{ userState?.email.value }}</p>
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
