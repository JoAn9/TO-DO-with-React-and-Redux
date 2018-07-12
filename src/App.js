import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import Welcome from "./components/Welcome";
import ToDoList from "./components/ToDoList";
import Congratulations from "./components/Congratulations";

const App = () => (
  <Router>
    <div>
      <ul style={{display: 'flex', justifyContent: 'center', marginTop: 10}}>
        <Link to="/"><Button bsStyle="info" style={{marginRight: '1em'}}>Welcome</Button></Link>
        <Link to="/list"><Button bsStyle="info" style={{marginRight: '1em'}}>TO DO List</Button></Link>
        <Link to="/congratulations"><Button bsStyle="info" disabled style={{marginRight: '1em'}}>Congratulations</Button></Link>
      </ul>

      <Route exact path="/" component={Welcome} />
      <Route path="/list" component={ToDoList} />
      <Route path="/congratulations" component={Congratulations} />
    </div>
  </Router>
);

export default App;