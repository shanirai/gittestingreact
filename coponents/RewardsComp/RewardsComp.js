// React, Next packages
import React from "react";

// Mui packages
import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { borderRight } from "@mui/system";
// Custom packages or Third Party packages

function RewardsComp() {
  const RewardsPoint = [
    {
      rewardspoints: "7,000",
      rewardstext: "Total Points Earned",
    },
    {
      rewardspoints: "6,000",
      rewardstext: "Redeemable Points",
    },
    {
      rewardspoints: "1,000",
      rewardstext: "Points Redeemed",
    },
  ];
  const RewardsContainer = styled("div")({
    display: "flex",
    marginTop: "30px",
  });
  const RewardPointsContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  });
  const style = {
    borderRight: "1px solid #2C2C31",
    opacity: 0.7,
    positon: "relative",
    top: "10px",
  };
  return (
    <RewardsContainer>
      <Grid container>
        {RewardsPoint.map((rewards, index) => {
          return (
            <>
              <Grid
                item
                md={4}
                key={index}
                style={index == 1 || index == 0 ? style : null}
              >
                <Card
                  sx={{
                    height: "132px",
                    borderRadius: "0px",
                    boxShadow: "none",
                    display: "flex",
                    direction: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CardContent>
                    <RewardPointsContainer>
                      <Typography
                        variant="h3"
                        color="secondary.lightBlue"
                        sx={{ paddingBottom: "15px" }}
                      >
                        {rewards.rewardspoints}
                      </Typography>
                      <Typography variant="subtitle1">
                        {rewards.rewardstext}
                      </Typography>
                    </RewardPointsContainer>
                  </CardContent>
                </Card>
                <Divider />
              </Grid>
            </>
          );
        })}
      </Grid>
    </RewardsContainer>
  );
}

export default RewardsComp;
