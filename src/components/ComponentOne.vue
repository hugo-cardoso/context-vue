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
    <div class="field">
      <label class="label">First Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          ref="inputFirstName"
          placeholder="First name"
          :value="userContext.state.firstName"
        >
      </div>
    </div>
    <div class="field">
      <label class="label">Last Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          ref="inputLastName"
          placeholder="Last name"
          :value="userContext.state.lastName"
        >
      </div>
    </div>
    <div class="field">
      <div class="control">
        <button class="button is-primary">
          Update
        </button>
      </div>
    </div>
  </form>
</template>
