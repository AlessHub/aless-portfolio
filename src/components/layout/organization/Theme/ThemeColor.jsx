import React, { useState, useContext } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  Box,
  IconButton,
} from "@mui/material";
import ThemeMode from "./ThemeMode";
import BrushIcon from "@mui/icons-material/Brush";
import { CirclePicker, ChromePicker } from "react-color";
import { ModeContext } from "../../../../App";

function ThemeColor() {
  const { mode, colorObj } = useContext(ModeContext);
  const { color, setColor } = colorObj;

  const [open, setOpen] = useState(false);
  const handlePopUpOpen = () => {
    setOpen(true);
  };

  const handlePopUpClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        pr: 2,
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-end",
        mt: { xs: 9, sm: 15 },
      }}
    >
      <IconButton
      aria-label="Theme"
        variant="contained"
        sx={{ textTransform: "capitalize" }}
        onClick={handlePopUpOpen}
      >
        <BrushIcon color="primary" />
      </IconButton>
      <Dialog open={open} onClose={handlePopUpClose}>
        <ThemeMode />
        <DialogContent>
          <CirclePicker
            triangle="hide"
            color={color}
            onChange={(newColor) => setColor(newColor.hex)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePopUpClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default ThemeColor;
