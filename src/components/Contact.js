import React from "react";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      error: {}
    };
  }
  handleChange = e => {
    // console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("Submit");
    const { name, email, phone } = this.state;
    if (name === "") {
      this.setState({ error: { name: "Please enter ypur Name" } });
    } else if (email === "") {
      this.setState({ error: { email: "please enter your email" } });
    } else if (phone === "") {
      this.setState({ error: { phone: "please enter your phone" } });
    } else {
      this.props.formData(this.state);
      this.setState({ name: "", phone: "", email: "", error: {} });
    }
  };
  render() {
    return (
      <div className="card w-50 mx-auto my-5 ">
        <div className="card-header">
          <h1>Contact Form</h1>
        </div>
        <div className="card-body">
          <form action="" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                onChange={this.handleChange}
                value={this.state.name}
                placeholder="Name"
                name="name"
                className="form-control"
              />
              <span className="text-danger">{this.state.error.name}</span>
            </div>
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <span className="text-danger">{this.state.error.email}</span>
            </div>
            <div className="form-group">
              <label htmlFor="Phone">Phone</label>
              <input
                type="number"
                placeholder="Phone"
                className="form-control"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
              />
              <span className="text-danger">{this.state.error.phone}</span>
            </div>
            <button className="btn btn-primary btn-sm" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
