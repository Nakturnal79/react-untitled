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
      .label("Password")
  };

  doSubmit = () => {
    console.log("sumbitted");
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <Input
            error={this.state.errors.username}
            name="username"
            label="Username"
            value={this.state.data.username}
            onChange={this.handleChange}
            type="text"
          />
          <Input
            error={this.state.errors.password}
            name="password"
            label="Password"
            value={this.state.data.password}
            onChange={this.handleChange}
            type="password"
          />
          <Input
            name="email"
            label="Email"
            value={this.state.data.email}
            onChange={this.handleChange}
            type="email"
          />
          <button
            className="btn btn-primary float-right"
            type="submit"
            // disabled={this.validate()}
          >
            Register
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default RegistrationForm;
