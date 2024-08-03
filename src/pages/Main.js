import { Box, CssBaseline } from "@mui/material";
import React from "react";
import TopNavBar from "../components/TopNavBar";
import SideBar from "../components/SideBar";
import Dashboard from "../components/Dashboard";

function Main() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopNavBar />
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Dashboard />
      </Box>
    </Box>
  );
}

export default Main;
