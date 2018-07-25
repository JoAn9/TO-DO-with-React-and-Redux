import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import ToDoList from "./components/ToDoList";
import Congratulations from "./components/Congratulations";
import Header from './components/Header';
import Main from './components/Main';

const App = () => (
  <div>
    {/* <Header /> */}
    <Main />
  </div>
);

export default App;