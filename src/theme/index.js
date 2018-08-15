import { createMuiTheme } from '@material-ui/core/styles/index';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#bf00ff',
      main: '#9900cc',
      dark: '#4d0066',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffff99',
      main: '#ffff66',
      dark: '#ffff00',
      contrastText: '#fff',
    },
    type: 'light',
  },
});

export default theme;