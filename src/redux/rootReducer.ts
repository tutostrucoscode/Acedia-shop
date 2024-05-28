import { combineReducers } from "@reduxjs/toolkit";
import { themeReducer } from "./slice/themeReducer";
import { authReducer } from "./slice/authReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
});

export default rootReducer;
