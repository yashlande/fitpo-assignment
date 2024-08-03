import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

import IconButton from "@mui/material/IconButton";

import SearchIcon from "@mui/icons-material/Search";

export default function SearchInputComponent() {
  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "35px",
        backgroundColor: "#2A2B30",
      }}
    >
      <IconButton color="inherit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon sx={{ color: "white" }} />
      </IconButton>
      <InputBase
        size="small"
        sx={{ ml: 1, flex: 1, color: "white" }}
        placeholder="Search "
        inputProps={{ "aria-label": "search google maps" }}
      />
    </Paper>
  );
}
