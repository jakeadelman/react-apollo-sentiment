import { action, observable } from "mobx";
import { useStaticRendering } from "mobx-react";
import { create, persist } from "mobx-persist";
import { createContext } from "react";

const isServer = !process.browser;
useStaticRendering(isServer);

export class Store {
  @observable lastUpdate = 0;
  @persist @observable light = true;
  @persist @observable isAuth = false;

  //   constructor(isServer, initialData = {}) {
  //     this.lastUpdate =
  //       initialData.lastUpdate != null ? initialData.lastUpdate : Date.now();
  //     this.light = !!initialData.light;
  //   }

  //   @action start = () => {
  //     this.timer = setInterval(() => {
  //       this.lastUpdate = Date.now();
  //       this.light = true;
  //     }, 1000);
  //   };

  //   stop = () => clearInterval(this.timer);
}

let store = null;
export const hydrate = create();
export const StoreContext = createContext(new Store());

export function initializeStore(initialData) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return new Store(isServer, initialData);
  }
  if (store === null) {
    store = new Store(isServer, initialData);
  }
  hydrate("some", store).then(() => console.log("someStore has been hydrated"));

  return store;
}
