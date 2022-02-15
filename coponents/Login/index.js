// React, Next packages
import React from "react";
// Mui packages
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
// Custom packages or Third Party packages

function Login() {
  const MyComponent = styled("div")({
    maxWidth: "600px",
    height: 528,
    background: "white",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    position: "relative",
    top: 100,
    padding: "55px 0px",
  });

  const ImageContainer = styled("div")({
    display: "flex",
    justifyContent: "center",
    minWidth: "600px",
  });

  const TextContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  });
  const Button = styled("button")({
    width: "280px",
    height: 55,
    background: "#2C2C31",
    marginTop: 15,
  });

  return (
    <div style={{ display: "flex" }}>
      <MyComponent>
        <ImageContainer>
          <img src="/Images/login_screen_img.svg" />
        </ImageContainer>

        <TextContainer>
          <Typography variant="h2">Employee Portal</Typography>
          <Typography
            varient="body1"
            maxWidth={443}
            sx={{ textAlign: "center", padding: "16px 0px" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </Typography>
          <Button>
            <Typography color="primary.main" variant="h6">
              Login With Gmail
            </Typography>
          </Button>
        </TextContainer>
      </MyComponent>
    </div>
  );
}

export default Login;
