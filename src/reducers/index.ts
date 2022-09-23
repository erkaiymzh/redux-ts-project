import { combineReducers } from "redux";
import { AuthReducers } from "./AuthReducers";
import { userReducers } from "./UserReducers";

export const rootReducer = combineReducers({
  userReducers,
  AuthReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
