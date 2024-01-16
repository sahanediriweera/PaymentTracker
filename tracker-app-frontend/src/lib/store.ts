import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./features/jwtSlice";

export const store = configureStore({
  reducer: {
    tokenReducer: tokenReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;