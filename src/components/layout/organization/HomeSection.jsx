import { Typography, Container, Button } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Panda from "../../../assets/panda.jpg";

const HomeSection = () => {
  return (
    <>
      <Container maxWidth="large" sx={{ display: "flex" }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "space-around",
            flexDirection: "column",
            gap: 3,
            mt: 5,
          }}
        >
          <Typography
            variant="h2"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <span>Alessandro</span>
            <span>Arroyo</span>
            <span>Lebron</span>
          </Typography>
          <Typography variant="h6">FullStack Web Developer</Typography>
          <div>
            <EmailIcon />
            <LinkedInIcon></LinkedInIcon>
            <GitHubIcon />
          </div>
        </Container>
        <Container maxWidth="large"
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignContent: "space-around",
            flexDirection: "column",
            gap: 3,
            mt: 4,
          }}
        >
          <Typography align="right" variant="h2">
            About me
          </Typography>
          <Typography align="right" variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in
            magna diam quis malesuada elementum imperdiet non.
          </Typography>
        </Container>
      </Container>
        <Container maxWidth="large" sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="contained"
            sx={{ fontSize: 24, width: "180px", mt: 2, ml: 3 }}
          >
            Contact me
          </Button>
          <Button
            variant="contained"
            sx={{ alignSelf: "flex-end", fontSize: 24, width: "180px", mr:3 }}
          >
            Learn More
          </Button>
      </Container>
      <Container maxWidth="large"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img className="panda" src={Panda} alt="Panda :D" />
      </Container>
    </>
  );
};

export default HomeSection;
