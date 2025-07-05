import { useGetAppointments } from "../hooks/useGetAppointments.ts";
import { Card, CardContainer, DoctorName, Info, Label } from "./styled.ts";

export const PatientDashBoard = () => {
  const { appointments } = useGetAppointments();
  return (
    <CardContainer>
      {appointments.map(({ id, doctorName, date, time, reasonForVisit }) => (
        <Card key={id}>
          <div>Upcoming appointments</div>
          <DoctorName>{doctorName}</DoctorName>
          <Info>
            <Label>Date:</Label> {date}
          </Info>
          <Info>
            <Label>Time:</Label> {time}
          </Info>
          <Info>
            <Label>Reason:</Label> {reasonForVisit}
          </Info>
        </Card>
      ))}
    </CardContainer>
  );
};
