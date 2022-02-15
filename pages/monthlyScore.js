// React, Next packages
import React from "react";
// Mui packages
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Custom packages or Third Party packages
import SideBar from "coponents/Common/SideBar";
import Layout from "coponents/Common/Layout";
import NavigationBar from "coponents/Common/NavigationBar";

function monthlyScore() {
  return (
    <>
      <Layout title="Monthly Score | Employee Manegment">
        <Grid container>
          <Grid item md={3}>
            <SideBar />
          </Grid>
          <Grid item md={9} sx={{ margin: "50px 30px 30px -30px" }}>
            <NavigationBar pageTitle="Monthly Score " />
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}

export default monthlyScore;
