import { inject, InjectionKey } from "vue";

export const useContext = <T>(context: InjectionKey<T>) => inject(context)!;