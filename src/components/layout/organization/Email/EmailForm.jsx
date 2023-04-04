import React from "react";
import { useState } from "react";
import { send } from "emailjs-com";
import { FormControl, TextField, Button } from "@mui/material";

const EmailForm = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Alessandro",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_xfjktxl", "template_3wo5sqo", toSend, "W9dok0V1UzNRVpI-q")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <FormControl
          sx={{
            p: 2,
            display: "flex",
            gap: 3,
            width: { xs: "100%", sm: "50%" },
            margin: "auto",
          }}
        >
          <TextField
            name="from_name"
            placeholder="Your name"
            value={toSend.from_name}
            onChange={handleChange}
            type="text"
            color="primary"
            variant="outlined"
            label="Name"
          />
          <TextField
            type="text"
            name="to_name"
            sx={{ display: "none" }}
            placeholder="to name"
            value={toSend.to_name}
            onChange={handleChange}
          />
          <TextField
            type="text"
            name="message"
            placeholder="Your message"
            value={toSend.message}
            onChange={handleChange}
            
            variant="outlined"
            label="Message"
          />
          <TextField
            type="text"
            name="reply_to"
            placeholder="Your email"
            value={toSend.reply_to}
            onChange={handleChange}
            
            variant="outlined"
            label="Email"
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </FormControl>
      </form>
    </>
  );
};

export default EmailForm;
