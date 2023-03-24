import './App.css';
import PublicRoute from './router/public/Router';
import { useState, createContext } from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export const ModeContext = createContext(); // Create a context

function App() {
  const [mode, setMode] = useState('light');

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: '#AB3CAF',
      },
      secondary: {
        main: '#f50057',
      },
      typography: {
        fontFamily: 'Economica',
      }
    },
  });

  const toggleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PublicRoute />
      </ThemeProvider>
    </ModeContext.Provider>
  );
}

export default App;
