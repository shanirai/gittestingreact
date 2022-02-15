// React, Next packages
import React from "react";

// Mui packages
import { Button, Card, CardContent, Typography } from "@mui/material";
import styled from "@emotion/styled";
// Custom packages or Third Party packages

function AnnouncementCard() {
  const IconContainer = styled("div")({
    display: "flex",
    flexDirection: "row",
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
    textAlign: "center",
  });

  return (
    <Card sx={{ height: "242px", borderRadius: "0px", boxShadow: "none" }}>
      <CardContent sx={{ padding: "20px" }}>
        <Typography variant="subtitle2" textAlign="center">
          Announcements
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            lineHeight: "150%",
            color: "#2c2c31",
            opacity: 0.7,
          }}
        >
          <span>
            <img src="/Images/quote.png" />{" "}
          </span>
          Everyday is a learning day! Click here to view
        </Typography>
        <LightContentText>
          EverEveryday is a learning day! Click here to view your learning Plan
        </LightContentText>
      </CardContent>
    </Card>
  );
}
export default AnnouncementCard;
