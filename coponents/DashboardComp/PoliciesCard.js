// React, Next packages
import React from "react";

// Mui packages
import { Card, CardContent, Typography } from "@mui/material";
import styled from "@emotion/styled";
// Custom packages or Third Party packages

function PoliciesCard() {
  const IconContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: "15px",
  });
  const LightContentText = styled("div")({
    fontSize: "12px",
    lineHeight: 1.5,
    color: "#2C2C31",
    opacity: 0.7,
    height: "75px",
    padding: "12px 0px 18px 0px",
  });
  const CustomButton = styled("button")({
    width: "125px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: " 1px solid #2C2C31",
    boxSizing: "border-box",
    background: "#ffffff",
    cursor: "pointer",
    "&:hover": {
      background: "#2c2c31",
      color: "white",
    },
  });
  return (
    <Card sx={{ height: "242px", borderRadius: "0px", boxShadow: "none" }}>
      <CardContent sx={{ padding: "20px" }}>
        <IconContainer>
          <img
            src="/Images/GroupBar.svg"
            style={{ width: "40px", height: "40px" }}
          />
        </IconContainer>
        <Typography variant="subtitle2">Policies</Typography>
        <LightContentText>
          Have a look at all the latest company policies of 2022 to avail all
          its benefits.
        </LightContentText>
        <CustomButton>
          <Typography variant="subtitle2">View All</Typography>
        </CustomButton>
      </CardContent>
    </Card>
  );
}

export default PoliciesCard;
