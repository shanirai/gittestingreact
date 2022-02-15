// React, Next packages
import React from "react";
// Mui packages
import { Card, CardContent, Typography, Grid } from "@mui/material";
import styled from "@emotion/styled";
// Custom packages or Third Party packages
function PolicesComp() {
  const CardContainer = styled("div")({
    border: "none",
    background: "#787DF9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "172px",
    width: "100%",
    marginTop: "30px",
  });

  return (
    <>
      <CardContainer>
        <Typography variant="h1" color="primary.main">
          Mckinley Rice Policies for 2022
        </Typography>
      </CardContainer>
    </>
  );
}

export default PolicesComp;
