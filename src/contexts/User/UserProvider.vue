<script lang="ts" setup>
import {
  reactive,
  provide,
  readonly,
  computed
} from "vue";
import {
  UserState,
  UserActions,
  UserContextKey,
  UserGetters,
  CreateGetters
} from "./types";

defineProps<{
  tag: keyof HTMLElementTagNameMap;
  [key: string]: any;
}>();

const state: UserState = reactive({
  firstName: "",
  lastName: "",
  email: "test@test.com",
});

const getters: CreateGetters<UserGetters> = {
  fullName: computed(() => `${state.firstName} ${state.lastName}`),
};

const actions: UserActions = {
  setFirstName: (firstName: string) => {
    state.firstName = firstName;
  },
  setLastName: (lastName: string) => {
    state.lastName = lastName;
  },
  setEmail: (email: string) => {
    state.email = email;
  },
};

provide(UserContextKey, {
  state: readonly(state),
  getters,
  actions,
});
</script>

<template>
  <component :is="$props.tag" v-bind="$props">
    <slot></slot>
  </component>
</template>
