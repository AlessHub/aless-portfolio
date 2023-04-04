import React from "react";
import projects from "../../../../utils/projects.json";
import { Typography } from "@mui/material";
import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ProjectModal from "./ProjectCardsModal";
import { useTheme } from "@emotion/react";

const ProjectCard = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = React.useState(null);

  const handleOpen = (index) => {
    setSelectedProjectIndex(index);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      {projects.map((project, index) => (
        <Card
          key={project.id}
          sx={{
            paddingTop: "0px !important",
            width: { xs: 345, sm: 540 },
            boxShadow: `2px 2px ${theme.palette.primary.main}`,
            border: `1px solid ${theme.palette.primary.main}`,
          }}
        >
          <CardMedia
            component="img"
            alt="Projects Cards"
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
            <Button size="small" onClick={() => handleOpen(index)}>
              Learn More
            </Button>
            <ProjectModal
              project={project}
              open={open && selectedProjectIndex === index}
              handleClose={handleClose}
            />
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default ProjectCard;
