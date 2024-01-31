import React from "react";
import { appointmentLink } from "./constants";
export const ButtonAppointment = () => {
  return (
    <a href={appointmentLink} target="_blank" rel="noreferrer">
      <button>Click me</button>
    </a>
  );
};
