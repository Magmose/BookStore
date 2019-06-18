import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
export default class Product extends Component {
  handleSubmit(book){
    console.log(book)
    this.props.bookStore.deleteBook(book)

  };

  render() {
    const { bookStore } = this.props;
    const list = bookStore.books.map(b => (
      <li key={b.id}>
        {b.title} <Link to={`/products/${b.id}`}>Details</Link>
        <Link to={`/products`} onClick={()=>this.handleSubmit(b.id)}> Delete</Link>
      </li>
    ));

    return (
      <div>
        <h3>Product </h3>
        <ul>{list}</ul>
        <Route
          path={`/products/:id`}
          render={props => {
            return <Details {...props} bookStore={this.props.bookStore} />;
          }}
        />
      </div>
    );
  }
}

function Details(props) {
  let id = props.match.params.id;
  let book = props.bookStore.books.find(book => book.id === Number(id));
  return (
    <div>
      <h4>Book details:</h4>
      <p>{id}</p>
      <p>{book.title}</p>
      <p>{book.info}</p>
    </div>
  );
}
