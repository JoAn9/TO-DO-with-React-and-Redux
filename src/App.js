import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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