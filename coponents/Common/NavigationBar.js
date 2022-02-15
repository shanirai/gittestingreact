// React, Next packages
import React from "react";
// Mui packages
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
// Custom packages or Third Party packages

function NavigationBar({ pageTitle }) {
  const CustomContainer = styled("div")({
    display: "flex",
    justifyContent: "space-between",
  });
  const Button = styled("button")({
    cursor: "pointer",
    color: "##2C2C31",
    border: "none",
  });

  return (
    <CustomContainer>
      <div>
        <Typography variant="h4">{pageTitle} </Typography>
      </div>
      <div>
        <Button>
          <Typography variant="body1">LogOut</Typography>
        </Button>
      </div>
    </CustomContainer>
  );
}

export default NavigationBar;
