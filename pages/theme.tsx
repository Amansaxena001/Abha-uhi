import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({


  palette: {
    //define component base colors 
    primary: {
      main: '#eeeeee',
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
  overrides: {
    MuiContainer: {
      root: {
        '@media(min-width:768px)': {
          maxWidth: '720px',

        },
        '@media(min-width:992px)': {
          maxWidth: '960px',

        },
      }

    }
  }

});




export default theme;