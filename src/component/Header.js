import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch,NavLink} from "react-router-dom"; 
const Header = () => {
  return (
    <ul className="header">
    <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
    <li><NavLink activeClassName="active" to="/products">Products</NavLink></li>
    <li><NavLink activeClassName="active" to="/company">Company</NavLink></li>
    <li><NavLink activeClassName="active" to="/addbooks">Add Books</NavLink></li>
  </ul>
  );
};

export default Header;  