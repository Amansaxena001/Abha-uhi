import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    //define component base colors 
    primary: {
      main: '#00bbff',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },

    background: {
      default: '#ffffff',
    },
  },
  typography: {
    //define component base styles
    button: {
      fontFamily: 'lato',
      fontWeight: 700
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  }
});

export default theme;