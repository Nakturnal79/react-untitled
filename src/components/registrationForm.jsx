import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi";

class RegistrationForm extends Component {
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
    const result = Joi.validate(this.state.data, this.schema, {
      abortEarly: false
    });
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;

    // errors[result.]
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
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
