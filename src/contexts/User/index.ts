import UserProvider from "./UserProvider.vue";
import { UserContextKey } from "./types";
import { useContext } from "../../utils/useContext";

export const useUser = () => useContext(UserContextKey);

export { UserProvider };