import React from "react";
import { Typography, Container } from "@mui/material";
import EmailForm from "./Email/EmailForm";

const ContactSection = () => {
  return (
    <>
      <Container>

      <Typography
        variant="h3"
        sx={{ fontWeight: 300, mb: 3, mt: 5 }}
        textAlign={"center"}
      >
        Contact info
      </Typography>
      <Typography variant="body1" sx={{mb:2, p:2}} textAlign={"center"}>
        Thank you for browsing through my Portfolio! Feel free to contact me,
        even if it's to just have a chat, or perhaps you want to give me some
        feedback? Any interaction is welcome.
      </Typography>
      <EmailForm/>
      </Container>
    </>
  );
};

export default ContactSection;
