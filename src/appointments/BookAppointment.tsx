import { useState } from "react";
import {
  StyledBookAppointmentContent,
  StyledBookAppointmentHeader,
  StyledButton,
  StyledDiv,
  StyledForm,
} from "./styled.ts";
import { validateInputs } from "./helpers.ts";
import { usePostAppointments } from "../hooks/usePostAppointments.ts";

export const BookAppointment = (): React.ReactElement => {
  const timeSlots = ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM"];
  const [errors, setErrors] = useState({
    doctorName: "",
    date: "",
    time: "",
    reasonForVisit: "",
    additionalNotes: "",
  });
  const [doctorInfo, setDoctorInfo] = useState({
    doctorName: "",
    date: "",
    time: "3PM",
    reasonForVisit: "",
    additionalNotes: "",
  });
  const { postAppointment } = usePostAppointments();

  const handleDoctorName = (event) => {
    const doctorName = event.target.value;
    setDoctorInfo((prev) => ({ ...prev, doctorName }));
  };

  const handleAdditionalNotes = (e) => {
    const additionalNotes = e.target.value;
    setDoctorInfo((prev) => ({ ...prev, additionalNotes }));
  };
  const handleReasonForVisit = (e) => {
    const reasonForVisit = e.target.value;
    setDoctorInfo((prev) => ({ ...prev, reasonForVisit }));
  };
  const handleDate = (e) => {
    const date = e.target.value;
    setDoctorInfo((prev) => ({ ...prev, date }));
  };

  const handleTime = (e) => {
    console.log("time", e.target.value);
    const time = e.target.value;
    setDoctorInfo((prev) => ({ ...prev, time }));
  };

  const handleClick = () => {
    const newErrors: typeof errors = {
      doctorName: "",
      date: "",
      time: "",
      reasonForVisit: "",
      additionalNotes: "",
    };

    let hasError = false;

    if (!doctorInfo.doctorName.trim()) {
      newErrors.doctorName = "Doctor name is required";
      hasError = true;
    }
    if (!doctorInfo.date.trim()) {
      newErrors.date = "Date is required";
      hasError = true;
    }
    if (!doctorInfo.time.trim()) {
      newErrors.time = "Time is required";
      hasError = true;
    }
    if (!doctorInfo.reasonForVisit.trim()) {
      newErrors.reasonForVisit = "Reason for visit is required";
      hasError = true;
    }
    if (!doctorInfo.additionalNotes.trim()) {
      newErrors.additionalNotes = "Additional notes are required";
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) return;

    postAppointment(doctorInfo);
  };
  return (
    <>
      <StyledBookAppointmentContent>
        <div>Book an Appointment</div>
        <StyledForm>
          <StyledDiv>
            <label>Select Doctor :</label>
            <input
              required
              value={doctorInfo.doctorName}
              onChange={handleDoctorName}
            />
            {errors.doctorName && (
              <span style={{ color: "red" }}>{errors.doctorName}</span>
            )}
          </StyledDiv>
          <StyledDiv>
            <label>Select date :</label>{" "}
            <input required type="date" onChange={handleDate} />
            {errors.date && <span style={{ color: "red" }}>{errors.date}</span>}
          </StyledDiv>
          <StyledDiv>
            <label>Select TimeSlot :</label>
            {timeSlots.map((time) => (
              <span>
                <input
                  required
                  type="radio"
                  value={time}
                  onChange={handleTime}
                  checked={doctorInfo.time === time}
                />
                {time}
              </span>
            ))}
            {errors.time && <span style={{ color: "red" }}>{errors.time}</span>}
          </StyledDiv>
          <StyledDiv>
            <label>Reason for Visit:</label>
            <textarea onChange={handleReasonForVisit} />
            {errors.reasonForVisit && (
              <span style={{ color: "red" }}>{errors.reasonForVisit}</span>
            )}
          </StyledDiv>
          <StyledDiv>
            <label>Additional Notes:</label>
            <textarea onChange={handleAdditionalNotes} />
          </StyledDiv>
          <StyledDiv>
            <StyledButton onClick={handleClick}>Confirm Booking</StyledButton>
          </StyledDiv>
        </StyledForm>
      </StyledBookAppointmentContent>
    </>
  );
};
