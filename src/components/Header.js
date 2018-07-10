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
              <Link to="/list">
                <Button bsStyle="info">TO DO List</Button>
              </Link>
            </span>
            <span>
              <Link to="/congratulations">
                <Button bsStyle="info" disabled>Congratulations</Button>
              </Link>
            </span>
          </ul>

          <Route exact path="/" component={Welcome} />
          <Route path="/list" component={ToDoList} />
          <Route path="/congratulations" component={Congratulations} />
        </div>
      </Router>
  )
}
 export default Header;