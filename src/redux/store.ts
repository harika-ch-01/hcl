import { configureStore } from "@reduxjs/toolkit";
import appointmentsReducer from "./appointmentsSlice.ts";

export const store = configureStore({
  reducer: {
    appointments: appointmentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
