import { Box, CssBaseline } from "@mui/material";
import React from "react";
import TopNavBar from "../components/TopNavBar";
import Dashboard from "../components/Dashboard";
import LeftSideBar from "../components/LeftSideBar";
import { Color } from "../constants/Colors";

function Main() {
  return (
    <>
      <TopNavBar />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <LeftSideBar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            background: Color.BackgroundSecondary,
            width: "80vw",
          }}
        >
          <Dashboard />
        </Box>
      </Box>
    </>
  );
}

export default Main;
