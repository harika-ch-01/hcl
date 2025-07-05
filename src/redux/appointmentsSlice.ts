import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store.ts";

export interface Appointment {
  doctorName: string;
  date: string;
  time: string;
  reasonForVisit: string;
  additionalNotes: string;
}

interface AppointmentsState {
  appointments: Appointment[];
}

const initialState: AppointmentsState = {
  appointments: [],
};

const appointmentsSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    addAppointment(state, action: PayloadAction<Appointment>) {
      state.appointments.push(action.payload);
    },
  },
});

export const { addAppointment } = appointmentsSlice.actions;

export const selectAppointments = (state: RootState) =>
  state.appointments.appointments;

export default appointmentsSlice.reducer;
