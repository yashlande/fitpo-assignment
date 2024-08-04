import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Chart from "./Chart";
import OrdersList from "./OrdersList";
import Feedback from "./Feedback";
import Card from "./Card";
import totalOrders from "../assets/images/totalOrders.png";
import NetProfit from "./CardNetProfit";
import MenuList from "./MenuList";

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "600", color: "white" }}
        gutterBottom
      >
        Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={8}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Grid container spacing={4}>
              <Grid item sm={3}>
                <Card
                  imageName={totalOrders}
                  cardHeading={"Total Orders"}
                  count={75}
                  percentage={3}
                  percentageType="up"
                />
              </Grid>
              <Grid item sm={3}>
                <Card
                  imageName={totalOrders}
                  cardHeading={"Total Delivered"}
                  count={70}
                  percentage={3}
                  percentageType="down"
                />
              </Grid>
              <Grid item sm={3}>
                <Card
                  imageName={totalOrders}
                  cardHeading={"Total Cancelled"}
                  count={"05"}
                  percentage={3}
                  percentageType="up"
                />
              </Grid>
              <Grid item sm={3}>
                <Card
                  imageName={totalOrders}
                  cardHeading={"Total Revenue"}
                  count={"$12k"}
                  percentage={3}
                  percentageType="down"
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item md={4}>
          <NetProfit />
        </Grid>
        <Grid item sm={8}>
          <Chart />
        </Grid>
        <Grid item xs={12} md={4}>
          <MenuList />
        </Grid>
        <Grid item sm={8}>
          <OrdersList />
        </Grid>
        <Grid item xs={12} md={4}>
          <Feedback />
        </Grid>
        {/* 
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <OrdersList />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Feedback />
        </Paper>
      </Grid> */}
      </Grid>
    </Box>
  );
};

export default Dashboard;
