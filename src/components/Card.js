import { Paper, Typography } from "@mui/material";
import React from "react";

function Card() {
  return (
    <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
      <Typography variant="h6" gutterBottom>
        Total Orders
      </Typography>
      <Typography variant="h3">75</Typography>
      <Typography color="success.main">3% increase</Typography>
    </Paper>
  );
}

export default Card;
