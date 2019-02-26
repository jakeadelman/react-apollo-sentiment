import { createContext } from "react";
import { observable } from "mobx";
// import * as mobby from "mobx-sync";
// import { create, persist } from "mobx-persist";

class UserStore {
  @observable isAuth = false;
}

// const store = observable({ foo: "the" });

export const userStore = new UserStore();
export const UserStoreContext = createContext(userStore);
// let trunk = new mobby.AsyncTrunk(store);
// trunk.init().then(() => {
//   // do any staff with loaded store
//   console.log("userStore.isAuth");
// });

// if (process.browser) {
// const hydrate = create();
// hydrate("user", userStore).then(() => console.log("has been hydrated"));

// export function hydrateUser() {
//   hydrate("user", userStore).then(() =>
//     console.log("has been hydrated and reset")
//   );
// }
