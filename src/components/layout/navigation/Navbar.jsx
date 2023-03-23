import { Toolbar, Stack, Button, AppBar, Box } from "@mui/material";
import Logo from "../../../assets/logo.png";
import React from "react";
import { Link } from "react-router-dom";
import ThemeMode from "../organization/ThemeMode";

const Navbar = () => {
  return (
    <>
      <AppBar sx={{backgroundColor:"#111111"}} bgcolor="black" maxWidth="xl">
        <Toolbar
          sx={{
            p:1,
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
            <Link to="#">
              <Button color="inherit">Skills</Button>
            </Link>
            <Button color="inherit">Projects</Button>
            <Button color="inherit">Contact</Button>
          </Stack>
        </Toolbar>
      </AppBar>
        <ThemeMode/>
    </>
  );
};

export default Navbar;
