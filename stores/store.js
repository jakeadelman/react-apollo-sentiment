import { action, observable } from "mobx";
import { useStaticRendering } from "mobx-react";
import { create, persist } from "mobx-persist";
import { createContext } from "react";
import { getStateDate } from "../components/Helpers/Functions";

const isServer = !process.browser;
useStaticRendering(isServer);

export class Store {
  @observable lastUpdate = 0;
  @persist @observable light = true;
  @persist @observable isAuth = false;
  @persist @observable startDate = "2020-02-24T12:43:56.702Z";
  @persist @observable endDate = "2020-02-28T12:43:56.702Z";
  @persist @observable date = 1;
  @persist @observable pnl = 0;

  @action changeDate = newDate => {
    let dates = getStateDate(newDate);
    this.date = newDate;
    this.startDate = dates.start;
    this.endDate = dates.end;
  };

  @action addPnl = pnl => {
    this.pnl += pnl;
  };

  @action resetPnl = () => {
    this.pnl = 0;
  };

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

  hydrate("store", store).then(() => {
    console.log("someStore has been hydrated");
  });

  return store;
}
