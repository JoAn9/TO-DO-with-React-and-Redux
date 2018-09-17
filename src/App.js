import React from "react";
import { MuiThemeProvider } from '@material-ui/core/styles';
import Main from './components/Main';
import theme from './theme/index';

const App = () => (
  <MuiThemeProvider theme={theme}>
    {/* <Header /> */}
    <Main />
  </MuiThemeProvider>
);

export default App;