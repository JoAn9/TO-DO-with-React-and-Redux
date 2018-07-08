import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Welcome from "./components/Welcome";
import ToDoList from "./components/ToDoList";
import Congratulations from "./components/Congratulations";

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Welcome</Link>
        </li>
        <li>
          <Link to="/about">TO DO List</Link>
        </li>
        <li>
          <Link to="/topics">Congratulations</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Welcome} />
      <Route path="/about" component={ToDoList} />
      <Route path="/topics" component={Congratulations} />
    </div>
  </Router>
);

export default App;