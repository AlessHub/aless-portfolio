import React from "react";
import { Container } from "@mui/system";
import { Typography, Link} from "@mui/material";
import ProjectCards from "./ProjectCards/ProjectCards";


const PortfolioSection = () => {

  return (
    <>
      <Container id="projects-section">
        <Typography
          variant="h3"
          sx={{ fontWeight: 300, mb: 3 }}
          textAlign={"center"}
        >
          My Projects
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }} textAlign={"center"}>
          These projects were made in a 850 hour long Bootcamp, at{" "}
          <Link rel="noopener" target="_blank" href="https://factoriaf5.org">
            Factoria F5
          </Link>
        </Typography>
      </Container>
      <Container
        sx={{
          display: "flex",
          gap: 5,
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
        >
        <ProjectCards/>
      </Container>
    </>
  );
};

export default PortfolioSection;
