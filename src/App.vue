<script setup lang="ts">
import ComponentOne from "./components/ComponentOne.vue";
import ComponentTwo from "./components/ComponentTwo.vue";
import { UserProvider } from "./contexts/User";
</script>

<template>
  <UserProvider tag="div" class="container is-max-desktop pt-4">
    <ComponentOne />
    <ComponentTwo />
  </UserProvider>
</template>

<style scoped>
.container {
  width: 400px;
  max-width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
}
</style>
