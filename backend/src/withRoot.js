import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import customCss from './custom.css'
import lightGreen from '@material-ui/core/colors/lightGreen';
import green from '@material-ui/core/colors/green';
import CssBaseline from '@material-ui/core/CssBaseline';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: lightGreen[200],
      main: lightGreen[400],
      dark: lightGreen[600],
    },
    secondary: {
      light: green[200],
      main: green[400],
      dark: green[600],
    },
  },
  logo: {
      fontFamily: 'Pacifico'
  }
});

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
