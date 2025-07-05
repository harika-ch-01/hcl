import { useState } from "react";
import { API_BASE_URL, PATIENT_ID } from "../constants/constants.ts";

export const usePostAppointments = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<any>(null);

  const postAppointment = async (appointmentData: any) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `${API_BASE_URL}/api/appointments/${PATIENT_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(appointmentData),
        }
      );
      if (!res.ok) {
        throw new Error("Failed to post appointment");
      }
      const data = await res.json();
      setResponse(data);
      return data;
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return { postAppointment, loading, error, response };
};
