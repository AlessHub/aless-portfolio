import React from "react";
import { Container } from "@mui/system";
import projects from "../../../utils/projects.json"
import { Typography } from "@mui/material";
import {Card} from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';



const PortfolioSection = () => {
  
  return (
    <>
      <Container sx={{display:'flex', flexDirection:"column", alignItems:"center"}}>
        <Typography variant="h2" sx={{mb:3}} textAlign={"center"} >
          My Projects
        </Typography>
        {projects.map((project) => (
          <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
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
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        ))}
      </Container>
    </>
  );
};

export default PortfolioSection;
