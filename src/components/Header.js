import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import Welcome from "./Welcome";
import ToDoList from "./ToDoList";
import Congratulations from "./Congratulations";

const Header = props => {
  return (
    <Router>
    <div>
      <ul>
        <span>
          <Link to="/">
            <Button bsStyle="info">Welcome</Button>
          </Link>
        </span>
        <span>
          <Link to="/about">
            <Button bsStyle="info">TO DO List</Button>
          </Link>
        </span>
        <span>
          <Link to="/topics">
            <Button bsStyle="info">Congratulations</Button>
          </Link>
        </span>
      </ul>

      <hr />

      <Route exact path="/" component={Welcome} />
      <Route path="/about" component={ToDoList} />
      <Route path="/topics" component={Congratulations} />
    </div>
  </Router>
  )
}

export default Header;
