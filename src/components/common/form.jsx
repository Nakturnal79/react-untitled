import React, { Component } from "react";
import Joi from "joi";
import Input from "./input";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };
  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
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

  submitButton(label) {
    return (
      <button
        className="btn btn-primary float-right"
        type="submit"
        disabled={this.validate()}
      >
        {label}
      </button>
    );
  }
  inputField(name, label, type = "text") {
    return (
      <Input
        error={this.state.errors[name]}
        name={name}
        label={label}
        value={this.state.data[name]}
        onChange={this.handleChange}
        type={type}
      />
    );
  }
}

export default Form;
