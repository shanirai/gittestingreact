// React, Next packages
import React from "react";
import Link from "next/link";
// Mui packages
import { Card, CardContent, Typography, Grid } from "@mui/material";
import styled from "@emotion/styled";
// Custom packages or Third Party packages

function PoliciesCard() {
  const PoliciesList = [
    {
      title: "Attendance, Leave, and Virtual Office Policy 2022",
      image: "/Images/policiesImg1.png",
    },
    {
      title: "Corporate Social Responsibility Policy 2022",
      image: "/Images/policiesImg2.png",
    },
    {
      title: "McKinley & Rice DEFCON Policy 2022",
      image: "/Images/policiesImg3.png",
    },
    {
      title: "Grievance Redressal Policy 2022",
      image: "/Images/policiesImg4.png",
    },
    {
      title: "Performance Evaluation Policy 2022",
      image: "/Images/policiesImg5.png",
    },
    {
      title: "Skill Enhancement Policy 2022",
      image: "/Images/policiesImg6.png",
    },
  ];
  const IconContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: "10px",
  });
  const CustomContainer = styled("div")({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "5px",
    marginTop: "30px",
  });

  return (
    <CustomContainer>
      <Grid container spacing={3}>
        {PoliciesList.map((listPolcies, index) => {
          return (
            <Grid item md={4} key={index}>
              <Link href="/dashboard">
                <Card
                  sx={{
                    height: "242px",
                    borderRadius: "0px",
                    boxShadow: "none",
                    cursor: "pointer",
                  }}
                >
                  <CardContent sx={{ padding: "12px 14px" }}>
                    <IconContainer>
                      <img src={listPolcies.image} />
                    </IconContainer>
                    <Typography variant="subtitle2">
                      {listPolcies.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </CustomContainer>
  );
}

export default PoliciesCard;
