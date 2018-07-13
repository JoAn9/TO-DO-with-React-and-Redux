import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import Welcome from "./components/Welcome";
import ToDoList from "./components/ToDoList";
import Congratulations from "./components/Congratulations";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Welcome} />
      <Route path="/list" component={ToDoList} />
      <Route path="/congratulations" component={Congratulations} />
    </div>
  </Router>
);

export default App;