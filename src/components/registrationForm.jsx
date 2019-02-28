import React, { Component } from "react";
import Input from "./common/input";

class RegistrationForm extends Component {
  state = {
    data: {
      username: "",
      password: "",
      email: ""
    },
    errors: {}
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
  };
  handleChange = e => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(e.currentTarget);
    if (errorMessage) errors[e.currentTarget.name] = errorMessage;
    else delete errors[e.currentTarget.name];
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data, errors });
  };
  validate = () => {
    const errors = {};
    if (this.state.data.username.trim() === "")
      errors.username = "Empty username";
    if (this.state.data.password.trim() === "")
      errors.password = "Empty password";
    if (this.state.data.email.trim() === "") errors.email = "Empty email";
    return Object.keys(errors).length === 0 ? null : errors;
  };
  validateProperty = e => {
    if (e.name === "username")
      if (e.value.trim() === "") return "Empty username";
    if (e.name === "password")
      if (e.value.trim() === "") return "Empty password";
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
            disabled={this.validate()}
          >
            Register
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default RegistrationForm;
