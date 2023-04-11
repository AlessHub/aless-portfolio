import { useState } from "react";
import {
  Button,
  FormControl,
  TextField,
  Dialog,
  DialogContent,
  DialogActions,
  Snackbar,
  Typography,
} from "@mui/material";
import { send } from "emailjs-com";
import { useTheme } from "@emotion/react";
import { hexToRgb } from "../../../../utils/Functions";

const EmailForm = () => {
  const theme = useTheme();

  const autoFillStyle = {
    "& input:WebkitAutofill": {
      "WebkitBoxShadow?": `0 0 0 100px rgba(${hexToRgb(
        theme.palette.primary.main
      )}, 0.4) inset`,
      "WebkitTextFillColor": "#ffffff0",
      caretColor: "#ffffff0",
      borderRadius: "inherit",
    },
  };

  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Alessandro",
    message: "",
    reply_to: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [emailError, setEmailError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });

    if (e.target.name === "reply_to") {
      if (!emailRegex.test(e.target.value)) {
        setEmailError("Please enter a valid email address.");
      } else {
        setEmailError("");
      }
    }
  };
  const handleConfirmationSubmit = () => {
    send("service_xfjktxl", "template_3wo5sqo", toSend, "W9dok0V1UzNRVpI-q")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setShowSuccessMessage(true);
        setShowConfirmation(false);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isValid =
    toSend.from_name.trim().length > 0 &&
    toSend.message.trim().length > 0 &&
    emailRegex.test(toSend.reply_to);

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
            sx={autoFillStyle}
          />
          <TextField
            type="text"
            name="to_name"
            sx={{ display: "none" }}
            placeholder="to name"
            value={toSend.to_name}
            onChange={handleChange}
            style={autoFillStyle}
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
            sx={autoFillStyle}
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
            error={emailError !== ""}
            helperText={emailError}
            sx={autoFillStyle}
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
          <Typography>
            Please confirm that you want to send the email
          </Typography>
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
