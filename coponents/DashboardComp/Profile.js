// React, Next packages
import React from "react";
// Mui packages
import { Card, Typography, CardContent, CardMedia } from "@mui/material";
import { borderRadius, style, styled } from "@mui/system";

// Custom packages or Third Party packages

function Profile() {
  const CardBackground = styled("div")({
    background: "#2C2C31",
    height: "100px",
  });
  const CustomCardContent = styled("div")({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: "10px 45px",
    textAlign: "center",
  });
  const LightContentText = styled("div")({
    textAlign: "center",
    fontSize: "12px",
    lineHeight: 1.5,
    color: "#2C2C31",
    opacity: 0.7,
    paddingTop: "8px",
  });

  return (
    <Card sx={{ height: "420px", borderRadius: "0px", boxShadow: "none" }}>
      <CardBackground>
        <div>
          <CardMedia
            component="img"
            alt="profile"
            width="125px"
            height="125px"
            image="/Images/profileImg.svg"
            style={{
              objectFit: "fill",
              position: "relative",
              top: "30px",
            }}
          />
        </div>
      </CardBackground>
      <div
        style={{
          display: "flex",
          paddingTop: "40px",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <CardContent>
          <Typography variant="h6">Vishal Chandwani</Typography>

          <LightContentText> UX /UI Designer</LightContentText>
        </CardContent>
      </div>
      <div>
        <CustomCardContent>
          <div>
            <Typography variant="h6">Laptop</Typography>
            <LightContentText>Device Details</LightContentText>
          </div>
          <div>
            <Typography variant="h6">06 Dec 2021</Typography>
            <LightContentText>Date of Birth</LightContentText>
          </div>
        </CustomCardContent>
        <CustomCardContent>
          <div>
            <Typography variant="h6">Noida</Typography>
            <LightContentText>Reporting Office</LightContentText>
          </div>
          <div>
            <Typography variant="h6">MNR123</Typography>
            <LightContentText>Employee ID</LightContentText>
          </div>
        </CustomCardContent>
      </div>
    </Card>
  );
}

export default Profile;
