import { Typography, Container, Button } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Panda from "../../../assets/panda.jpg";
import { styled } from "@mui/material/styles";
import { blue, purple, red, green } from "@mui/material/colors";

const Responsive = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: green[500],
  },
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    flexDirection: "row",
    color: blue[500],
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "row",
    color: red[500],
  },
  [theme.breakpoints.up("lg")]: {
    display: "flex",
    flexDirection: "row",
    color: purple[500],
  },
}));

const HomeSection = () => {
  return (
    <>
      <Responsive>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "space-between",
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
        <Container
          maxWidth="large"
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignContent: "space-around",
            flexDirection: "column",
            gap: 3,
            mt: 4,
          }}
        >
          <Typography
            sx={{
              textAlign: {
                sm: "right",
                lg: "right",
                md: "right",
              },
            }}
            variant="h2"
          >
            About me
          </Typography>
          <Typography
            sx={{
              textAlign: {
                sm: "right",
                lg: "right",
                md: "right",
              },
            }}
            variant="h6"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in
            magna diam quis malesuada elementum imperdiet non.
          </Typography>
        </Container>
      </Responsive>
      <Container
        maxWidth="large"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: {
            xs: 0,
            sm: 0,
            md: 0,
            lg: 0,
          },
        }}
      >
        <Button
          color="secondary"
          variant="contained"
          sx={{
            fontSize: 24,
            width: {
              xs: "135px",
              sm: "160px",
              md: "180px",
              lg: "180px",
            },
            mt: 2,
            ml: {
              xs: 2,
              sm: 3,
            },
          }}
        >
          Contact me
        </Button>
        <Button
          color="secondary"
          variant="contained"
          sx={{
            alignSelf: "flex-end",
            fontSize: 24,
            width: {
              xs: "135px",
              sm: "160px",
              md: "180px",
              lg: "180px",
            },
            mr: {
              xs: 2,
              sm: 3,
            },
          }}
        >
          Learn More
        </Button>
      </Container>
      <Container
        maxWidth="large"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container
          sx={{
            width: "100%",
            justifyContent: "center",
            display: {
              xs: "none",
              sm: "flex",
              md: "flex",
              lg: "flex",
            },
          }}
        >
          <Responsive>
            <img className="panda" src={Panda} alt="Panda :D" />
          </Responsive>
        </Container>
      </Container>
    </>
  );
};

export default HomeSection;
