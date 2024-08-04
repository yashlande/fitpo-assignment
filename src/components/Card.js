import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { Color } from "../constants/Colors";

function Card({
  imageName,
  cardHeading,
  count,
  percentage,
  percentageType = "up",
}) {
  return (
    <Paper
      sx={{
        p: 2,
        width: "100%",
        minWidth: "195px",
        height: "163px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: Color.BackgroundPrimary,
      }}
    >
      <Box sx={{ display: "flex", gap: "5%", alignItems: "center" }}>
        <img
          src={imageName}
          alt="logo"
          width={50}
          height={50}
          style={{ borderRadius: "5px" }}
        />
      </Box>
      <Typography sx={{ marginTop: "10px", color: "white" }} gutterBottom>
        {cardHeading}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "600", color: "white" }}>
          {count}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {percentageType === "up" ? (
            <ArrowDropUpIcon sx={{ color: Color.Green }} />
          ) : (
            <ArrowDropDownIcon sx={{ color: Color.Red }} />
          )}
          <Typography color={percentageType === "up" ? Color.Green : Color.Red}>
            {percentage}%{" "}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}

export default Card;
