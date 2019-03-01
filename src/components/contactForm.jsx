import React, { Component } from "react";
import Input from "./common/input";
import Form from "./common/form";
import Joi from "joi";

class ContactForm extends Form {
  state = {
    data: {
      firstName: "",
      email: "",
      message: ""
    },
    errors: {}
  };

  schema = {
    firstName: Joi.string()
      .required()
      .label("Firs Name"),
    email: Joi.string()
      .required()
      .label("Email")
  };

  doSubmit = () => {
    console.log("sumbitted");
  };
  /*handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors });
    if (errors) return;
  };
  handleChange = e => {
    const data = { ...this.state.data };
    console.log(e.target.name);
    data[e.target.name] = e.currentTarget.value;
    this.setState({ data });
  };
  validate() {
    const { firstName, email, message } = this.state.data;
    const errors = {};
    if (firstName.trim() === "") errors.firstName = "First name is required";
    if (email.trim() === "") errors.email = "Email name is required";
    return Object.keys(errors).length === 0 ? null : errors;
  }*/
  render() {
    return (
      <div className="col-md-6 ml-auto">
        <div className="well well-sm">
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <Input
              error={this.state.errors.firstName}
              onChange={this.handleChange}
              value={this.state.data.firstName}
              type="text"
              id="firstName"
              label="First Name"
              name="firstName"
            />
            <Input
              error={this.state.errors.email}
              onChange={this.handleChange}
              value={this.state.data.email}
              type="email"
              id="email"
              label="Email address"
              name="email"
            />
            <div className="form-group">
              <label htmlFor="message">Enter text here</label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
                name="message"
              />
            </div>
            {this.submitButton("Button")}
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
