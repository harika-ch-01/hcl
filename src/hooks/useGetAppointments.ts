import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { PATIENT_ID } from "../constants/constants.ts";
import { addAppointment } from "../redux/appointmentsSlice.ts";

export const useGetAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:8080/api/appointments/${PATIENT_ID}`
      );

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || "Failed to fetch appointments");
      }
      const data = await response.json();
      console.log("data response........", data);
      setAppointments(data.data);
      dispatch(addAppointment(data.data));
    } catch (err) {
      setError(err.message || "Something went wrong while fetching");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return { appointments, loading, error };
};
