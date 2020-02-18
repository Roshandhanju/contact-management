import React from "react";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: ""
    };
  }
  handleChange = e => {
    // console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("Submit");
    this.props.formData(this.state);
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
                placeholder="Name"
                name="name"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                name="email"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Phone">Phone</label>
              <input
                type="number"
                placeholder="Phone"
                className="form-control"
                name="phone"
                onChange={this.handleChange}
              />
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
