import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#121212',
        },
        secondary: {
            main: '#21bdca',
        },
    },
    header: {
        height:'40px'
    }
});