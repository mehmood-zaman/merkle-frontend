import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./App";

const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export default store;
