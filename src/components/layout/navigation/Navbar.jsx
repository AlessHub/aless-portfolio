import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Container
} from "@mui/material";
import Logo from "../../../assets/logo.png";
import React from "react";
import { Link } from "react-router-dom";
import { flexbox } from "@mui/system";

const Navbar = () => {
  return (
    <>
     <Container maxWidth="xl">
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
          <Link to="/create">
            <Button color='inherit'>Create</Button>
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
