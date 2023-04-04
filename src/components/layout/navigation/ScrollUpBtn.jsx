import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useTheme } from "@mui/material";

const ScrollToTop = () => {
  const theme = useTheme();
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  return (
    <>
      {" "}
      {showTopBtn && (
        <IconButton
          sx={{
            borderRadius: "50%",
            color: "white",
            backgroundColor: theme.palette.primary.main,
            position: "fixed",
            bottom: "40px",
            right: "20px",
            height: "40px",
            width: "40px",
            zIndex:"4000",
            "&:hover":{
              backgroundColor: `${theme.palette.primary.main} !important`
            }
          }}
        >
          <ArrowUpwardIcon />
        </IconButton>
      )}{" "}
    </>
  );
};

export default ScrollToTop;
