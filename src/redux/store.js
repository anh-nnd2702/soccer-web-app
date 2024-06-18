import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./reducer/homeSlice";

const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});

export default store;
