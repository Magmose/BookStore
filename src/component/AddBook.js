import React, { Component } from "react";
import { BrowserRouter as Prompt } from "react-router-dom";
class AddBooks extends Component {
  constructor(props) {
    super(props);
    this.state = { book: { title: "", info: "", id: "" }, isBlocking: false };
  }

  handleChange = event => {
    let book = this.state.book;
    book[event.target.name] = event.target.value;
    this.setState({ book, isBlocking: event.target.value.length > 0 });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.book.id.length > 0) {
      this.props.bookStore.editBook(this.state.book);
      this.setState({
        book: { title: "", info: "", id: "" },
        isBlocking: false
      });
    } else {
      console.log("add!!");
      this.props.bookStore.addBook(this.state.book);
      this.setState({ book: { title: "", info: "", id: "" }, isBlocking: false });
    }
  };

  render() {
    let { isBlocking } = this.state;
    return (
      <div>
        <h3>Add Book:</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            name="id"
            placeholder="id"
            value={this.state.book.id}
            onChange={this.handleChange}
          />
          <br/>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={this.state.book.title}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="info"
            placeholder="Info"
            value={this.state.book.info}
            onChange={this.handleChange}
          />

          <br />
          <input type="submit" value="Add" />
          <input type="submit" value="Edit" />
        </form>
        <h4>{JSON.stringify(this.state.book)}</h4>
        <Prompt
          when={isBlocking}
          message={location =>
            `Are you sure you want to go to ${location.pathname}`
          }
        />
        <p>
          Blocking?
          {isBlocking ? "Yes" : "No"}
        </p>
      </div>
    );
  }
}
export default AddBooks;
