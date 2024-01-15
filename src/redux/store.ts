"use client";
import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./features/recipe/recipeSlice";
import { baseApi } from "./api/api";

export const store = configureStore({
  [baseApi.reducerPath]: baseApi.reducer,
  reducer: { recipes: recipeSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
