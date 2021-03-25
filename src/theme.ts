import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { 
      main: '#1FC4C4' 
    },
    secondary: { 
      main: '#00000' 
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
