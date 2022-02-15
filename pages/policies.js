// React, Next packages
import React from "react";
// Mui packages
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Custom packages or Third Party packages
import SideBar from "coponents/Common/SideBar";
import Layout from "coponents/Common/Layout";
import NavigationBar from "coponents/Common/NavigationBar";
import PolicesComp from "coponents/PoliciesComp/PolicesComp";
import PoliciesCard from "coponents/PoliciesComp/PoliciesCard";

function policies() {
  return (
    <>
      <Layout title="MNR Policies | Employee Manegment">
        <Grid container>
          <Grid item md={3}>
            <SideBar />
          </Grid>
          <Grid item md={9} sx={{ margin: "50px 30px 30px -30px" }}>
            <NavigationBar pageTitle="Mckinley Rice Policies " />

            <Grid container spacing={3}>
              <Grid item md={12}>
                <PolicesComp />
                <PoliciesCard />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}

export default policies;
