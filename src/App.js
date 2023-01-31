

import './App.css';
import PublicRoute from './router/public/Router';


import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  typography: {
    fontFamily: [
      'Economica'
    ].join(','),
  },
  palette: {
    mode: 'dark',
  },
});



function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <PublicRoute/>
    </ThemeProvider>
  );
}

export default App;