import React from "react";
import { Box, CardContent, CardMedia, Modal } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import { Card, Typography, Button } from "@mui/material";
import ProjectCardSwiper from "./ProjectCardSwiper";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectModal = ({ project, open, handleClose }) => {
  const style = {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    height: 'auto',
    justifyContent:'space-between',
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    maxWidth: 600,
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
            {Array.isArray(project.techStack) && (
              <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                {project.techStack.map((tech, index) => (
                  <CardMedia
                    component="img"
                    sx={{ width: "30px", height: "auto", objectFit:'fill' }}
                    image={tech}
                    alt={`Tech ${index}`}
                    key={index}
                  />
                ))}
              </Box>
            )}
            <Button
              href={project.repository}
              target="_blank"
              variant="contained"
              sx={{
                mt: 3,
                color:'white',
                backgroundColor: "#111111",
                textTransform: "capitalize",
              }}
              startIcon={<GitHubIcon />}
            >
              repository
            </Button>
          </CardContent>
        </Card>
      </Fade>
    </Modal>
  );
};

export default ProjectModal;
