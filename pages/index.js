// React, Next packages

// Mui packages
import { Typography } from "@mui/material";
// Custom packages or Third Party packages
import Layout from "coponents/Common/Layout";
import Login from "coponents/Login";

export default function Home() {
  return (
    <>
      <Layout title="EMS Dashboard" content="My Index Page">
        <Login />
      </Layout>
    </>
  );
}
