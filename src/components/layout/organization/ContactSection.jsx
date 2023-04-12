import React from "react";
import { Typography, Container, Box, IconButton } from "@mui/material";
import EmailForm from "./Email/EmailForm";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactSection = () => {
  return (
    <>
      <Container id="contact-section">
        <Typography
          variant="h3"
          sx={{ fontWeight: 300, mb: 3, mt: 5 }}
          textAlign={"center"}
        >
          Contact info
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, p: 2, width: {xs:'100%', sm:'80%'}, margin:'auto'}} textAlign={"center"}>
          Thank you for browsing through my Portfolio! Feel free to contact me,
          even if it's to just have a chat, or perhaps you want to give me some
          feedback? Any interaction is welcome.
        </Typography>
        <EmailForm />
        <Box
          textAlign={"center"}
          sx={{ p:1, display: "flex", flexDirection:'column', width:{xs:'100%', sm:'50%'}, margin:'auto', mb:2}}
        >
          <Box sx={{ display: "flex", alignItems: "center"}}>
            <IconButton aria-label="email" href="mailto:aless312@gmail.com" target="_blank" variant="contained">
              <MailIcon color='primary' />
            </IconButton>
            <Typography variant="body2">aless312@gmail.com</Typography>
          </Box>
          <Box href="https://www.linkedin.com/in/alessandro-arroyo/" sx={{ display: "flex", alignItems: "center" }}>
            <IconButton aria-label="Linkedin" href="https://www.linkedin.com/in/alessandro-arroyo/" target="_blank" variant="contained">
              <LinkedInIcon alt="Linkedin" color='primary' />
            </IconButton>
            <Typography variant="body2">Alessandro Arroyo</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton aria-label="Github" href="https://github.com/AlessHub" target="_blank" variant="contained">
              <GitHubIcon color='primary'/>
            </IconButton>
          <Typography variant="body2">AlessHub</Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ContactSection;
