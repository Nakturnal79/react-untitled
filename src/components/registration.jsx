import React, { Component } from "react";
import RegistrationForm from "./registrationForm";

const Registration = () => {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 style={{ textAlign: "center" }}>Registration Form</h2>
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default Registration;
