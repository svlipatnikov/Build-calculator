/* eslint-disable import/no-mutable-exports */
import { createMuiTheme } from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0A2973',
      dark: '#009FDF',
    },
    secondary: {
      main: '#009FDF',
    },
  },
  shape: {
    borderRadius: 5,
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  overrides: {
    MuiToolbar: {
      root: {
        justifyContent: 'space-between',
      },
    },
    MuiAccordion: {
      root: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        '&:before': {
          content: 'none',
        },
      },
    },
    MuiAccordionSummary: {
      root: {
        justifyContent: 'flex-start',
        minHeight: 'unset !important',
        padding: 0,
      },
      content: {
        alignItems: 'center',
        flexGrow: 0,
        margin: '0 !important',
      },
    },
    MuiAccordionDetails: {
      root: {
        display: 'block',
        padding: 16,
      },
    },
    MuiTypography: {
      h4: {
        marginBottom: 30,
      },
      h5: {
        fontSize: 18,
      },
      h6: {
        fontSize: 18,
        marginBottom: 12,
      },
    },
  },
});

theme = createMuiTheme(theme, {
  overrides: {
    MuiTypography: {
      h4: {
        [theme.breakpoints.down(400)]: {
          fontSize: 24,
          marginBottom: 15,
        },
      },
    },
  },
});

export default theme;
