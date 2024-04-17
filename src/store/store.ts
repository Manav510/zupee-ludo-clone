import { configureStore } from "@reduxjs/toolkit";
import filtersReducer  from "./filterSlice";
import drawerReducer from "./drawerSlice"
export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    drawer: drawerReducer,
  },
});

