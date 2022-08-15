<script setup lang="ts">
import ComponentOne from "./components/ComponentOne.vue";
import ComponentTwo from "./components/ComponentTwo.vue";
import { UserProvider } from "./contexts/User";
</script>

<template>
  <UserProvider tag="div" class="block">
    <ComponentOne />
    <ComponentTwo />
  </UserProvider>
</template>

<style scoped>
.block {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
