<script setup lang="ts">
import { ref } from "vue";
import { useUser } from "../contexts/User";

const inputFirstName = ref<HTMLInputElement>();
const inputLastName = ref<HTMLInputElement>();
const inputEmail = ref<HTMLInputElement>();

const userContext = useUser();

const handleFormSubmit = () => {
  if (!inputFirstName?.value || !inputLastName?.value || !inputEmail?.value) {
    return;
  }

  userContext.actions.setFirstName(inputFirstName.value.value.trim());
  userContext.actions.setLastName(inputLastName.value.value.trim());
  userContext.actions.setEmail(inputEmail.value.value.trim());
};

const handleFormReset = () => {
  userContext.actions.reset();
}
</script>

<template>
  <form
    class="block"
    @submit.prevent="handleFormSubmit"
    @reset="handleFormReset"
  >
    <div class="field">
      <label class="label">First Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          ref="inputFirstName"
          placeholder="First name"
          :value="userContext.state.firstName"
          autocomplete="off"
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
          autocomplete="off"
        >
      </div>
    </div>
    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input
          class="input"
          type="text"
          ref="inputEmail"
          placeholder="Last name"
          :value="userContext.state.email"
          autocomplete="off"
        >
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button type="submit" class="button is-primary">
          Update
        </button>
      </div>
      <div class="control">
        <button type="reset" class="button is-secondary">
          Reset
        </button>
      </div>
    </div>
  </form>
</template>
