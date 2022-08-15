<script lang="ts" setup>
import { reactive, provide, toRefs, readonly } from "vue";
import { UserState, UserStateKey, UserActionsKey, UserActions } from "./types";

defineProps<{
  tag: keyof HTMLElementTagNameMap;
  [key: string]: any;
}>();

const state: UserState = reactive({
  name: "",
  email: "",
});

const setName: UserActions["setName"] = (name: string) => {
  state.name = name;
};

const setEmail: UserActions["setEmail"] = (email: string) => {
  state.email = email;
};

provide(UserStateKey, toRefs(readonly(state)));
provide(UserActionsKey, {
  setName,
  setEmail,
});
</script>

<template>
  <component :is="$props.tag" v-bind="$props">
    <slot></slot>
  </component>
</template>
