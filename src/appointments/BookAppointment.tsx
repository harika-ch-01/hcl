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
    const errors = validateInputs(doctorInfo);
    if (errors.length > 0) {
      //validate the text field errors ,and block the user from making any further request
    }
    postAppointment(doctorInfo);
  };
  return (
    <>
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
            <label>Select TimeSlot :</label>
            {timeSlots.map((time) => (
              <span>
                <input
                  type="radio"
                  value={time}
                  onChange={handleTime}
                  checked={doctorInfo.time === time}
                />
                {time}
              </span>
            ))}
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
