import { ComputedRef, InjectionKey } from "vue";

export type UserState = {
  firstName: string;
  lastName: string;
  email: string;
};

export type UserGetters = {
  fullName: string;
}

export type CreateGetters<T> = {
  [K in keyof T]: () => T[K];
}

export type UserActions = {
  reset: () => void;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setEmail: (email: string) => void;
};

export type UserContext = {
  state: UserState;
  getters: CreateGetters<UserGetters>;
  actions: UserActions;
};

export const UserContextKey: InjectionKey<UserContext> = Symbol("userContext");
