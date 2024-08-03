import React from "react";
import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import {
  MailOutline,
  SettingsOutlined,
  NotificationsNoneOutlined,
} from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import logo from "../assets/images/logo.png";
import SearchInputComponent from "./SearchInputComponent";
import { Color } from "../constants/Colors";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 3,
    top: 5,
  },
}));

const TopNavBar = () => {
  return (
    <AppBar
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: Color.BackgroundPrimary,
        position: "sticky",
        top: 0,
        height: "70px",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: "5%", alignItems: "center" }}>
          <img
            src={logo}
            alt="logo"
            width={50}
            height={40}
            style={{ borderRadius: "5px" }}
          />
          <SearchInputComponent />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <IconButton color="inherit">
            <SettingsOutlined />
          </IconButton>
          <IconButton color="inherit">
            <MailOutline />
          </IconButton>
          <IconButton color="inherit">
            <StyledBadge badgeContent={1} color="primary">
              <NotificationsNoneOutlined />
            </StyledBadge>
          </IconButton>
          <Avatar
            alt="Remy Sharp"
            sx={{ width: 26, height: 26 }}
            // sx={{ bgcolor: "primary.main" }}
            src="https://mui.com/static/images/avatar/1.jpg"
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
