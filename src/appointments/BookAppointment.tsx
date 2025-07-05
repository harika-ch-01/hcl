import { useState } from "react";
import {
  StyledBookAppointmentContent,
  StyledBookAppointmentHeader,
  StyledButton,
  StyledDiv,
  StyledForm,
} from "./styled.ts";

export const BookAppointment = () => {
  const [doctorInfo, setDoctorInfo] = useState({
    doctorName: "",
    date: "",
    reasonForVist: "",
    additionalNotes: "",
  });

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
    console.log("date.....", typeof date, "da.....", date);
    setDoctorInfo((prev) => ({ ...prev, date }));
  };

  const handleClick = () => {};
  return (
    <>
      <StyledBookAppointmentHeader>
        <div>Appointments</div>
      </StyledBookAppointmentHeader>
      <StyledBookAppointmentContent>
        <div>Book an Appointment</div>
        <StyledForm>
          <StyledDiv>
            <label>Select Doctor :</label>
            <input value={doctorInfo.doctorName} onChange={handleDoctorName} />
          </StyledDiv>
          <StyledDiv>
            <label>Select date :</label>{" "}
            <input type="date" onChange={handleDate} />
          </StyledDiv>
          <StyledDiv>
            <label>Reason for Visit:</label>
            <textarea onChange={handleReasonForVisit} />
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
