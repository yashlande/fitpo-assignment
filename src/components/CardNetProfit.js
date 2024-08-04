import React from "react";
import { Box, Typography, CircularProgress, Grid } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Color } from "../constants/Colors";

const NetProfit = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Color.BackgroundPrimary,
        borderRadius: 2,
        padding: 1.9,
        color: "white",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xm={6}>
          <Box>
            <Typography variant="subtitle1" color="white">
              Net Profit
            </Typography>
            <Typography variant="h3" fontWeight="bold">
              $6759.25
            </Typography>
            <Box
              sx={{
                width: "100%",
                justifyContent: "space-between",
                display: "flex",
                alignItems: "center",
                marginTop: 1,
              }}
            >
              <Box sx={{ display: "flex" }}>
                <ArrowDropUpIcon sx={{ color: Color.Green }} />
                <Typography variant="body1" sx={{ color: Color.Green }}>
                  3%
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xm={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <CircularProgress
              variant="determinate"
              value={70}
              size={100}
              thickness={4}
              sx={{ color: "#5856D6" }}
            ></CircularProgress>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "absolute",
                top: 25,
              }}
            >
              <Typography
                sx={{ fontSize: "16px" }}
                color="white"
                fontWeight="bold"
              >
                70%
              </Typography>
              <Typography
                variant="caption"
                sx={{ fontSize: "10px" }}
                color="gray"
              >
                Goal
              </Typography>
              <Typography
                variant="caption"
                sx={{ fontSize: "10px" }}
                color="gray"
              >
                Completed
              </Typography>
            </Box>
            {/* Note */}
            <Box sx={{ marginTop: "10px" }}>
              <Typography variant="caption" color="gray">
                *The values here have been rounded off.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NetProfit;
