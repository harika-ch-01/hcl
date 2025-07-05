type AppointmentData = {
  doctorName: string;
  date: string;
  reasonForVisit: string;
  additionalNotes?: string;
  time?: string;
};

export const validateInputs = (data: AppointmentData): string[] => {
  const errors: string[] = [];

  if (!data.doctorName || data.doctorName.trim() === "") {
    errors.push("Doctor's name is required.");
  }

  if (!data.date || data.date.trim() === "") {
    errors.push("Appointment date is required.");
  }

  if (!data.time || data.time.trim() === "") {
    errors.push("Time slot is required.");
  }

  if (!data.reasonForVisit || data.reasonForVisit.trim() === "") {
    errors.push("Reason for visit is required.");
  }

  return errors;
};
