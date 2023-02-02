import {
  Toolbar,
  Stack,
  Button,
  Container
} from "@mui/material";
import Logo from "../../../assets/logo.png";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
     <Container sx={{backgroundColor:'#000000'}} maxWidth="xl">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link
            to="/"
            sx={{
              flexGrow: 2,
              fontFamily: 'Economica',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img className="logo" src={Logo} alt="logo"/>
          </Link>
        <Stack direction="row">
          <Link to="/admin">
            <Button color='inherit'>Admin</Button>
          </Link>
          <Link to="/skills">
            <Button color='inherit'>Skills</Button>
          </Link>
          <Button color='inherit'>Projects</Button>
          <Button color='inherit'>Contact</Button>
        </Stack>
      </Toolbar>
      </Container>
    </>
  );
};

export default Navbar;
