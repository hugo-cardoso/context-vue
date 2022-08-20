<script lang="ts" setup>
import { reactive, provide } from "vue";
import { UserContext, UserContextKey } from "./types";

defineProps<{
  tag: keyof HTMLElementTagNameMap;
}>();

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  email: ""
};

const context: UserContext = {
  state: reactive({ ...INITIAL_STATE }),
  getters: {
    fullName: () => `${context.state.firstName} ${context.state.lastName}`
  },
  actions: {
    reset: () => {
      Object.assign(context.state, INITIAL_STATE);
    },
    setFirstName: (firstName: string) => {
      context.state.firstName = firstName;
    },
    setLastName: (lastName: string) => {
      context.state.lastName = lastName;
    },
    setEmail: (email: string) => {
      context.state.email = email;
    },
  },
};

provide(UserContextKey, context);
</script>

<template>
  <component :is="$props.tag">
    <slot></slot>
  </component>
</template>
