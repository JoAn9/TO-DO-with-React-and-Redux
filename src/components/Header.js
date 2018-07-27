import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Welcome from "./Welcome";
import ToDoList from "./ToDoList";
import Congratulations from "./Congratulations";

const Header = props => (
  <header>
    <nav>
      <span style={{marginRight: '1em'}}>
        <Link to="/">
          <Button color="primary">Welcome</Button>
        </Link>
      </span>
      <span style={{marginRight: '1em'}}>
        <Link to="/list">
          <Button color="primary">TO DO List</Button>
        </Link>
      </span>
      <span>
        <Link to="/congratulations">
          <Button disabled color="primary">Congratulations</Button>
        </Link>
      </span>
    </nav>
  </header>
)

 export default Header;