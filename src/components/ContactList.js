import React from "react";

class ContactList extends React.Component {
  state = {
    isShowing: false,
    isEditing: false,
    name: this.props.contact.name,
    email: this.props.contact.email,
    phone: this.props.contact.phone,
    error: {}
  };
  handleShowHide = () => {
    console.log("Click");
    this.setState({ isShowing: !this.state.isShowing });
  };
  handleDelete = () => {
    console.log("delete");
    this.props.delete(this.props.contact.id);
  };
  handleEdit = () => {
    this.setState({ isEditing: true });
  };
  handleChange = e => {
    // console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    let editingData = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      id: this.props.contact.id
    };
    this.props.edit(editingData);
    this.setState({ isEditing: false });
  };
  render() {
    console.log(this.props);
    let cls = this.state.isShowing ? "fas fa-sort-up" : "fas fa-sort-down";
    console.log(cls);
    if (this.state.isEditing) {
      return (
        <div className="card w-50 mx-auto my-5 ">
          <div className="card-header">
            <h1>Edit Form</h1>
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
                Edit
              </button>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div className="card w-50 my-5 mx-auto">
          <div className="card-header">
            <h1>
              <i onClick={this.handleShowHide} className={cls}></i>{" "}
              {this.props.contact.name}
              <div className="float-right">
                <i
                  onClick={this.handleDelete}
                  className="fas fa-trash mr-3  "
                ></i>
                <i onClick={this.handleEdit} className="fas fa-edit"></i>
              </div>
            </h1>
          </div>
          {this.state.isShowing ? (
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">{this.props.contact.email}</li>
                <li className="list-group-item">{this.props.contact.phone}</li>
              </ul>
            </div>
          ) : null}
        </div>
      );
    }
  }
}

export default ContactList;
