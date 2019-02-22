import { observable } from "mobx";
import { createContext } from "react";

class UserStore {
  @observable user = "";
  @observable isAuth = false;
}

export const UserStoreContext = createContext(new UserStore());
