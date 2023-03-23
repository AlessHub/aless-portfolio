import { useContext } from "react";
import { ModeContext } from "../../../App";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function ThemeMode() {
  const theme = useTheme();
  const { toggleMode } = useContext(ModeContext);
  return (
    <Box
      sx={{
        mt: {xs: 9, sm:13},
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-end",
        color: "text.primary",
        borderRadius: 1,
      }}
    >
      {theme.palette.mode.charAt(0).toUpperCase() + theme.palette.mode.slice(1)}
      <IconButton
        sx={{ ml: 1, mr: { xs: 2, sm: 2 } }}
        onClick={toggleMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
}

export default ThemeMode;
