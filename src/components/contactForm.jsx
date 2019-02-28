import React, { Component } from "react";
import Input from "./common/input";

class ContactForm extends Component {
  state = {
    data: {
      firstName: "",
      email: "",
      message: ""
    },
    errors: {}
  };
  handleSubmit = e => {
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
  }
  render() {
    return (
      <div className="col-md-6 ml-auto">
        <div className="well well-sm">
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <Input
              onChange={this.handleChange}
              value={this.state.data.firstName}
              type="text"
              id="firstName"
              label="First Name"
              name="firstName"
            />
            <Input
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
            <button className="btn btn-primary float-right" type="submit">
              Button
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
