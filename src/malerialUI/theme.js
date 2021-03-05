import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
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
});
