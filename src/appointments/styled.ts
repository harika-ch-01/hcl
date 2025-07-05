import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgb(0 0 0 / 0.1);
  padding: 20px;
  transition: box-shadow 0.3s ease;
  cursor: default;

  &:hover {
    box-shadow: 0 8px 15px rgb(0 0 0 / 0.15);
  }
`;

export const DoctorName = styled.h3`
  margin: 0 0 10px;
  color: #2c3e50;
`;

export const Info = styled.p`
  margin: 6px 0;
  color: #555;
  font-size: 14px;
`;

export const Label = styled.span`
  font-weight: 600;
  color: #34495e;
`;

export const StyledBookAppointmentHeader = styled.header`
  background-color: #4a90e2;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  border-radius: 12px 12px 0 0;
  box-shadow: 0 4px 8px rgba(74, 144, 226, 0.4);
  display: flex;
  flex-direction: column;
`;

export const StyledBookAppointmentContent = styled.section`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const StyledForm = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 600;
    margin-bottom: 0.4rem;
    color: #333;
  }

  input[type="text"],
  input[type="date"],
  textarea {
    padding: 0.6rem 0.8rem;
    font-size: 1rem;
    border-radius: 6px;
    border: 1.5px solid #ccc;
    transition: border-color 0.3s ease;
    font-family: inherit;
    resize: vertical;
  }

  input[type="text"]:focus,
  input[type="date"]:focus,
  textarea:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 5px #4a90e2;
  }

  span {
    margin-right: 1rem;
    display: inline-flex;
    align-items: center;
    font-size: 1rem;
    cursor: pointer;
  }

  input[type="radio"] {
    margin-right: 0.3rem;
    cursor: pointer;
  }
`;

export const StyledButton = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: #4a90e2;
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;
  align-self: flex-start;

  &:hover {
    background-color: #357abd;
  }
`;
