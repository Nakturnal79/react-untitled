import React, { Component } from "react";
import Input from "./common/input";
import Form from "./common/form";
import Joi from "joi";

class RegistrationForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      email: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password"),
    email: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required()
  };

  doSubmit = () => {
    // call the server
    console.log("submitted");
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          {this.inputField("username", "Username")}
          {this.inputField("password", "Password", "password")}
          {this.inputField("email", "Email")}
          {this.submitButton("Submit")}
        </form>
      </React.Fragment>
    );
  }
}

export default RegistrationForm;
