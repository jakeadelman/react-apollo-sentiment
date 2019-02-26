import { observable } from "mobx";
import { createContext } from "react";
import { create, persist } from "mobx-persist";

class UserStore {
  @persist @observable isAuth = false;
}

export const hydrate = create();
export const userStore = new UserStore();
export const UserStoreContext = createContext(userStore);
hydrate("user", userStore).then(() => console.log("has been hydrated"));

export function hydrateUser() {
  hydrate("user", userStore).then(() =>
    console.log("has been hydrated and reset")
  );
}
