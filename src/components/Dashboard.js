import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import Chart from "./Chart";
import OrdersList from "./OrdersList";
import Feedback from "./Feedback";

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Typography variant="h6" gutterBottom>
            Total Orders
          </Typography>
          <Typography variant="h3">75</Typography>
          <Typography color="success.main">3% increase</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Chart />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <OrdersList />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Feedback />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
