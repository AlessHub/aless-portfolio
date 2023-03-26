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
        <Typography variant="h2" sx={{mb:3}} textAlign={"center"} >
          My Projects
        </Typography>
        <Typography variant="body1" sx={{mb:3}} textAlign={"center"} >
          These projects were made in a 850 hour long Bootcamp, at Factoria F5
        </Typography>
      <Container sx={{display:'flex', gap:5, flexWrap:"wrap", justifyContent:'center', alignItems:"center"}}>
        {projects.map((project) => (
          <Card sx={{ width: 345, boxShadow:"2px 2px #AB3CAF", border:'1px solid #AB3CAF'}}>
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
