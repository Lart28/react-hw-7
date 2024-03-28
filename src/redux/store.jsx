import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./filterSlice";

import { contactsReducer } from "./contactSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterSlice.reducer,
  },
})

