import React from "react";
import StyledStrengthBar from "./styles";

export default function PasswordStrength() {
  return (
    <StyledStrengthBar className="bars">
      <div className="passwordBar"></div>
      <div className="passwordBar"></div>
      <div className="passwordBar"></div>
      <div className="passwordBar"></div>
    </StyledStrengthBar>
  );
}
