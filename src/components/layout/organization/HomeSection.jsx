import { Typography, Container, Button } from "@mui/material";
import React from "react";
import Panda from "../../../assets/panda.jpg";
import { styled } from "@mui/material/styles";
import { handleNavClick } from "../../../utils/Functions";

const Responsive = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    flexDirection: "row",
  },
}));

function HomeButton(props) {
  const { text, targetId } = props; // added targetId prop

  const handleClick = (event) => {
    handleNavClick(targetId, event); // call handleNavClick with targetId
  };
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleClick}
      sx={{
        color:"white",
        boxShadow:'none',
        p: 1,
        fontSize: 14,
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
            alignItems: { xs: "center", sm: "flex-start" },
            flexDirection: "column",
            gap: 3,
            mt: 1,
          }}
        >
          <Typography
            variant="h2"
            color="primary"
            sx={{
              fontWeight: "300",
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", sm: "flex-start" },
            }}
          >
            <span>Alessandro</span>
            <span>Arroyo</span>
            <span>Lebron</span>
          </Typography>
          <Typography variant="body1">FullStack Web Developer</Typography>
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
              fontSize: "3em",
              textAlign: {
                xs: "center",
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
                xs: "center",
                sm: "right",
              },
              mb: 2,
            }}
            variant="body2"
          >
            Hello! I'm a 27 year old developer from Barcelona. I love coding!
            Being able to convert my thoughts into a reality is something that
            makes me really happy. So I hope I can continue coding forever more!
          </Typography>
        </Container>
      </Responsive>
      <Container
        maxWidth="large"
        sx={{
          display: "flex",
          justifyContent: {xs:"center",
                            sm:'flex-start'},
          p: {
            xs: 0,
            sm: 0,
            md: 0,
            lg: 0,
          },
        }}
      >
        <HomeButton targetId="contact-section" text="Contact Me" />
        {/* <HomeButton text="Learn More" /> */}
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
