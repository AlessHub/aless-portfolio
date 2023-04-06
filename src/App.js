import './App.css';
import PublicRoute from './router/public/Router';
import { useState, createContext } from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "material-design-inspired-color-picker";

export const ModeContext = createContext();
export const ColorContext = createContext();

function App() {
  const [mode, setMode] = useState('light');
  const [color, setColor] = useState('#AB3CAF'); // set initial color

  const toggleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: color,
      },
      secondary: {
        main: '#f50057',
      },
      typography: {
        fontFamily: 'Economica',
      }
    },
  });

  return (
    <ModeContext.Provider value={{ mode, toggleMode, colorObj: { color, setColor } }}>

        <ThemeProvider theme={theme}>
          <CssBaseline />
          <PublicRoute />
        </ThemeProvider>
    </ModeContext.Provider>
  );
}

export default App;
