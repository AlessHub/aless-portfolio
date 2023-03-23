import { Typography, Container, Button } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Panda from "../../../assets/panda.jpg";
import { styled } from "@mui/material/styles";

const Responsive = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    flexDirection: "row",
  }
}));

function HomeButton(props) {
  const { text } = props;
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        fontSize: 21,
        width: {
          xs: "135px",
          sm: "160px",
          md: "180px",
          lg: "180px",
        },
        mt: 2,
        m: {
          xs: 2,
          sm: 3,
        },
      }}
    >
      {text}
    </Button>
  );
}


const HomeSection = () => {
  return (
    <>
      <Responsive>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: {xs:'center', sm:'flex-start'},
            flexDirection: "column",
            

            gap: 3,
            mt: 1,
          }}
        >
          <Typography
            variant="h2"
            color="primary"
            sx={{ display: "flex", flexDirection: "column", alignItems: {xs:'center', sm:'flex-start'}}}
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
            color="primary"
            sx={{
              textAlign: {
                xs:'center',
                sm: "right",
              },
            }}
            variant="h2"
          >
            <span>About me</span>
          </Typography>
          <Typography
            sx={{
              textAlign: {
                xs:'center',
                sm: "right",
              },mb:2
            }}
            variant="h6"
          >
            Hello! I'm a 27 year old developer from Barcelona.
              I love coding! Being able to convert my thoughts into a reality is
              something that makes me really happy. So I hope I can continue coding forever more!
           
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
        <HomeButton text="Contact Me"/>
        <HomeButton text="Learn More"/>
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
