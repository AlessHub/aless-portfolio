import React from "react";
import { Container } from "@mui/system";
import projects from "../../../utils/projects.json";
import { Typography, Link, Box } from "@mui/material";
import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

const PortfolioSection = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Container>
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
        {projects.map((project) => (
          <Card
            sx={{
              width: { xs: 345, sm: 540 },
              boxShadow: "2px 2px #AB3CAF",
              border: "1px solid #AB3CAF",
            }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              sx={{ height: { xs: 200, sm: 250 } }}
              image={project.imageCover}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                href={project.deploy === "null" ? "" : project.deploy}
                target="_blank"
                size="small"
                disabled={project.deploy === "null"}
              >
                {project.deploy === "null" ? "Not available" : "Link"}
              </Button>
              <Button size="small" onClick={handleOpen}>
                Learn More
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                  backdrop: {
                    timeout: 500,
                  },
                }}
              >
                <Fade in={open}>
                  <Box sx={style}>
                    <Typography
                      id="transition-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      id="transition-modal-description"
                      sx={{ mt: 2 }}
                    >
                      {project.description}
                    </Typography>
                  </Box>
                </Fade>
              </Modal>
            </CardActions>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default PortfolioSection;
