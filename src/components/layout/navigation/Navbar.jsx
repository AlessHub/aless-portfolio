import { Toolbar, Stack, Button, AppBar, Box } from "@mui/material";
import Logo from "../../../assets/logo.png";
import React from "react";
import ThemeMode from "../organization/Theme/ThemeMode";
import { useTheme } from "@mui/material";
import { handleNavClick } from "../../../utils/Functions";

const Navbar = () => {
  const theme = useTheme();

  return (
    <>
      <AppBar sx={{ backgroundColor: "#111111" }}>
        <Toolbar
          sx={{
            p: 1,
            display: "flex",
            justifyContent: {
              xs: "center",
              sm: "space-between",
            },
          }}
        >
          <Box
            component="img"
            sx={{
              width: "100%",
              maxWidth: "60px",
              height: "auto",
              display: {
                xs: "none",
                sm: "block",
              },
            }}
            alt="Logo"
            src={Logo}
          />
          <Stack direction="row">
            <Button
              color={
                theme.palette.mode === "dark" ? "inherit" : "primary"
              }
              onClick={(e) => handleNavClick("skills-section", e)}
            >
              Skills
            </Button>
            <Button
              color={
                theme.palette.mode === "dark" ? "inherit" : "primary"
              }
              onClick={(e) => handleNavClick("projects-section", e)}
            >
              Projects
            </Button>
            <Button
              color={
                theme.palette.mode === "dark" ? "inherit" : "primary"
              }
              onClick={(e) => handleNavClick("contact-section", e)}
            >
              Contact
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <ThemeMode />
    </>
  );
};

export default Navbar;