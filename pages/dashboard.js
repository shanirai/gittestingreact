// React, Next packages
import React from "react";
// Mui packages
import { Card, Grid, Typography, CardContent } from "@mui/material";
import { styled } from "@mui/system";

// Custom packages or Third Party packages
import SideBar from "coponents/Common/SideBar";
import Layout from "coponents/Common/Layout";
import NavigationBar from "coponents/Common/NavigationBar";
import Dropdown from "coponents/Common/Dropdown";
import BarCharts from "coponents/DashboardComp/BarCharts";
import Profile from "coponents/DashboardComp/Profile";
import PdpCard from "coponents/DashboardComp/PdpCard";
import PoliciesCard from "coponents/DashboardComp/PoliciesCard";
import RewardsCard from "coponents/DashboardComp/RewardsCard";
import AnnouncementCard from "coponents/DashboardComp/AnnouncementCard";
import AdvCard from "coponents/DashboardComp/AdvCard";

function dashboard() {
  return (
    <>
      <Layout title="Dashboard | Employee Manegment">
        <Grid container>
          <Grid item md={3}>
            <SideBar />
          </Grid>
          <Grid item md={9} sx={{ margin: "50px 30px 30px -30px" }}>
            <NavigationBar pageTitle="Dashboard " />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <div>
                <Typography
                  variant="h2"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span style={{ marginLeft: "-10px" }}>
                    <img src="/Images/illust1.svg" />{" "}
                  </span>
                  Hello, Vishal Chandwani!
                </Typography>
                <Typography variant="body1">
                  Here whats happening in your portal today
                </Typography>
              </div>
              <div>
                <Dropdown />
              </div>
            </div>
            {/* Graph and Profile Section  */}
            <Grid container spacing={3} sx={{ marginTop: 2 }}>
              <Grid item md={8}>
                <Card style={{ borderRadius: "0px", boxShadow: "none" }}>
                  <CardContent>
                    <Typography
                      style={{
                        fontSize: "20px",
                        lineHeight: "150%",
                        fontWeight: "700",
                        paddingBottom: "30px",
                      }}
                    >
                      {" "}
                      Monthly Score Table
                    </Typography>
                    <BarCharts />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={4}>
                <Profile />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ marginTop: "4px" }}>
              <Grid item md={4}>
                <PdpCard />
              </Grid>
              <Grid item md={4}>
                <PoliciesCard />
              </Grid>
              <Grid item md={4}>
                <RewardsCard />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ marginTop: "4px" }}>
              <Grid item md={4}>
                <AnnouncementCard />
              </Grid>
              <Grid item md={4}>
                <AdvCard />
              </Grid>
              <Grid item md={4}>
                <AdvCard />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}

export default dashboard;
