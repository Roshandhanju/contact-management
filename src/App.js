import React from "react";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import ContactList from "./components/ContactList";
import "bootstrap/dist/css/bootstrap.css";
import Title from "./components/Title";

class App extends React.Component {
  state = {
    count: 0,
    contact: [
      { id: 1, name: "ram", phone: 8997, email: "ram@gmail.com" },
      { id: 2, name: "hari", phone: 8997, email: "ram@gmail.com" },
      { id: 3, name: "shyam", phone: 8997, email: "ram@gmail.com" }
    ]
  };
  handleIncrement = () => {
    console.log("click");
    // this.state.count = this.state.count + 1; direct mutation
    console.log(this.state.count);
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    console.log("click");
    console.log(this.state.count);
    this.setState({ count: this.state.count - 1 });
  };

  submit = data => {
    console.log(data);
  };
  handleDelete = id => {
    console.log("Parent called");
    console.log(id);
    let filterData = this.state.contact.filter(function(contact) {
      return contact.id !== id;
    });
    this.setState({ contact: filterData });
  };
  handleFormData = data => {
    let id = this.state.contact.length + 1;
    this.setState({ contact: [{ ...data, id: id }, ...this.state.contact] });
  };
  handleEdit = data => {
    console.log(data);
    let editedData = this.state.contact.map(function(contact) {
      if (contact.id === data.id) {
        return data;
      }
      return contact;
    });
    console.log(editedData);
    this.setState({ contact: editedData });
  };
  render() {
    let contact = [
      { id: 1, name: "ram" },
      { id: 2, name: "ram" },
      { id: 3, name: "ram" }
    ];
    contact.map(function(data, index, allData) {
      console.log(data);
      console.log(index);
    });

    return (
      <div>
        <Navbar title="Contact Management System" data={[]} />
        <h1>Your counter is :{this.state.count}</h1>
        <button type="button" onClick={this.handleIncrement}>
          Increment
        </button>
        <button
          disabled={this.state.count === 0 ? true : false}
          type="button"
          onClick={this.handleDecrement}
        >
          Decrement
        </button>
        <Contact formData={this.handleFormData} contact={contact} />
        {this.state.contact.map((data, index) => {
          return (
            <ContactList
              edit={this.handleEdit}
              delete={this.handleDelete}
              contact={data}
            />
          );
        })}
        <Title item={this.submit} />
      </div>
    );
  }
}
export default App;
