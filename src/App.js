import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider } from '@material-ui/core/styles';
import Welcome from "./components/Welcome";
import ToDoList from "./components/ToDoList";
import Congratulations from "./components/Congratulations";
import Header from './components/Header';
import Main from './components/Main';
import theme from './theme/index';

const App = () => (
  <MuiThemeProvider theme={theme}>
    {/* <Header /> */}
    <Main />
  </MuiThemeProvider>
);

export default App;