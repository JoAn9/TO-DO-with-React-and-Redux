import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Welcome from "./components/Welcome";
import ToDoList from "./components/ToDoList";
import Congratulations from "./components/Congratulations";

export default (
  <Router>
    <Route exact path="/" component={Welcome} />
    <Route path="/list" component={ToDoList} />
    <Route path="/congratulations" component={Congratulations} />
  </Router>
);