// React, Next packages
import React from "react";

// Mui packages
import { Card, CardContent, Typography } from "@mui/material";
import styled from "@emotion/styled";
// Custom packages or Third Party packages

function AdvCard() {
  const IconContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: "5px",
  });

  return (
    <Card sx={{ height: "242px", borderRadius: "0px", boxShadow: "none" }}>
      <CardContent sx={{ padding: "20px" }}>
        <IconContainer>
          <img src="/Images/adv1.svg" height="170px" width="313px" />
        </IconContainer>
        <Typography variant="subtitle2">Personal Development plan</Typography>
      </CardContent>
    </Card>
  );
}

export default AdvCard;
