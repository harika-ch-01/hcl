import "./App.css";
import { BookAppointment } from "./appointments/BookAppointment.tsx";
import { PatientDashBoard } from "./appointments/PatientDashBoard.tsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { StyledBookAppointmentHeader } from "./appointments/styled.ts";

function App() {
  return (
    <div className="App">
      <>
        {/* <BookAppointment />
        <PatientDashBoard /> */}
        <StyledBookAppointmentHeader>
          <Link to="/"> Appointments</Link>
          <Link to="/upcoming-appointments">Upcoming Appointments</Link>
        </StyledBookAppointmentHeader>

        <Routes>
          <Route path="/" element={<BookAppointment />} />
          <Route path="/upcoming-appointments" element={<PatientDashBoard />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
