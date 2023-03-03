import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from '@reduxjs/toolkit/query'
import { weatherAPI } from "../services/weatherAPI";

export const setupStore = configureStore({
  reducer: {
    [weatherAPI.reducerPath]: weatherAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(weatherAPI.middleware),
});

setupListeners(setupStore.dispatch)
