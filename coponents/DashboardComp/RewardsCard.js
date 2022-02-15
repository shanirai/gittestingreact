// React, Next packages
import React from "react";

// Mui packages
import { Card, CardContent, Typography } from "@mui/material";
import styled from "@emotion/styled";
// Custom packages or Third Party packages

function RewardsCard() {
  const IconContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: "15px",
    textAlign: "center",
  });
  const LightContentText = styled("div")({
    fontSize: "12px",
    lineHeight: 1.5,
    color: "#ffffff",
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
    border: " 1px solid #ffffff",
    boxSizing: "border-box",
    background: "#ffffff",
    cursor: "pointer",
    "&:hover": {
      color: "#2c2c31",
    },
  });
  return (
    <Card
      sx={{
        height: "242px",
        borderRadius: "0px",
        boxShadow: "none",
        background: "#2C2C31",
      }}
    >
      <CardContent sx={{ padding: "20px" }}>
        <IconContainer>
          <Typography
            varient="subtitle2"
            color="primary.main"
            sx={{ fontWeight: 700 }}
          >
            MnR Rewards System
          </Typography>
        </IconContainer>
        <Typography variant="subtitle2">Personal Development plan</Typography>
        <LightContentText>
          Everyday is a learning day! Click here to view your learning Plan to
          stay focused!
        </LightContentText>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CustomButton>
            <Typography variant="subtitle2">View All</Typography>
          </CustomButton>
        </div>
      </CardContent>
    </Card>
  );
}

export default RewardsCard;
