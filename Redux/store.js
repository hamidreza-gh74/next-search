"use client";
import { cartReducers } from "./Slices/cartSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducers);

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

  reducer: {
    shoppingCart: persistedReducer,
  },
});

export const persistor = persistStore(store);
