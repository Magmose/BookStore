import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Company from "./component/Company";
import Header from "./component/Header";
import Product from "./component/Product";
import Home from "./component/Home";
import NoMatch from "./component/NoMatch";
import AddBook from "./component/AddBook";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Router Books</h3>
        </header>
        
        <Router>
          <div>
            <Header />
            <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/products" render={() => <Product bookStore={this.props.bookStore}/>} />
            <Route path="/company" render={() => <Company />} />
            <Route path="/addbooks" render={() => <AddBook bookStore={this.props.bookStore} />} />
            <Route component={NoMatch}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
