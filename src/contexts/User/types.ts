import { InjectionKey, ToRefs } from "vue";

export type UserState = {
  name: string;
  email: string;
};

export type UserActions = {
  setName: (name: string) => void;
  setEmail: (email: string) => void;
};

export const UserStateKey: InjectionKey<ToRefs<UserState>> =
  Symbol("userState");

export const UserActionsKey: InjectionKey<UserActions> = Symbol("userActions");
