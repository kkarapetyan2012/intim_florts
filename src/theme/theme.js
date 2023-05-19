import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#212B36',
    },
    secondary: {
      main: '#F76448',
    },
    link: {
      main: '#585DEC',
    },
    danger: {
      main: '#F76448',
    },
    light: {
      main: '#FEF6F0',
    },
    white: {
      main: '#fff',
    }
  },
  typography: {
    fontSize: 16,
    lineHeight: 22,
    h1: {
      fontSize: '30px',
      lineHeight: '41px',
      fontWeight: 800,
      fontFamily: 'Manrope',
    },
    h2: {
      fontSize: '24px',
    },
  },
  overrides: {
    MuiContainer: {
      maxWidthLg: {
        maxWidth: '1440px',
      },
    },
  },

  space: [0, 4, 8, 16, 32, 64, 128, 256, 512, 1024],
  breakpoints: {
    values: {
      xs: 0, // extra-small breakpoint
      sm: 600, // small breakpoint
      md: 992, // medium breakpoint
      lg: 1440, // large breakpoint
      xl: 1920, // extra-large breakpoint
    },
  },
});

export default theme;

