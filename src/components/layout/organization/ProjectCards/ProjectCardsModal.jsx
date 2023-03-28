import React from "react";
import { CardActions, CardContent, CardMedia, Modal } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import { Card, Typography } from "@mui/material";
import ProjectCardSwiper from "./ProjectCardSwiper";

const ProjectModal = ({ project, open, handleClose }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    height: "80%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
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
        <Card sx={style}>
          <CardMedia>
            <ProjectCardSwiper imageUrls={project.imageSlider} />
          </CardMedia>
          <CardContent>

          <Typography id="transition-modal-title" variant="h6" component="h2">
            {project.title}
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            {project.detailedDescription}
          </Typography>
          </CardContent>
          <CardActions>

          </CardActions>
        </Card>
      </Fade>
    </Modal>
  );
};

export default ProjectModal;
