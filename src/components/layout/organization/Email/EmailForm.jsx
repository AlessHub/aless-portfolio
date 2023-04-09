import { useState } from "react";
import {
  Button,
  FormControl,
  TextField,
  Dialog,
  DialogContent,
  DialogActions,
  Snackbar,
} from "@mui/material";
import { send } from "emailjs-com";

const EmailForm = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Alessandro",
    message: "",
    reply_to: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleConfirmationSubmit = () => {
    send("service_xfjktxl", "template_3wo5sqo", toSend, "W9dok0V1UzNRVpI-q")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setShowSuccessMessage(true);
        setShowConfirmation(false); // Close the confirmation dialog after the email is sent successfully
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const isValid =
    toSend.from_name.trim().length > 0 &&
    toSend.message.trim().length > 0 &&
    toSend.reply_to.trim().length > 0;

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
            required
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
            required
            variant="outlined"
            label="Message"
          />
          <TextField
            type="text"
            name="reply_to"
            placeholder="Your email"
            value={toSend.reply_to}
            onChange={handleChange}
            required
            variant="outlined"
            label="Email"
          />
          <Button
            sx={{ color: "white" }}
            variant="contained"
            type="submit"
            disabled={!isValid}
          >
            Submit
          </Button>
        </FormControl>
      </form>
      <Dialog
        open={showConfirmation}
        onClose={() => setShowConfirmation(false)}
      >
        <DialogContent>
          <p>Please confirm that you want to send the email</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowConfirmation(false)}>Cancel</Button>
          <Button onClick={handleConfirmationSubmit} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={showSuccessMessage}
        autoHideDuration={6000}
        message="Email sent successfully"
        onClose={() => setShowSuccessMessage(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </>
  );
};

export default EmailForm;
