import React, { useEffect, useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import {
  AccountBalanceWallet,
  Home,
  Assessment,
  LocalMall,
} from "@mui/icons-material";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { Color } from "../constants/Colors";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const drawerWidth = 60; // Initial collapsed width
const expandedDrawerWidth = 240; // Expanded width on hover

const SIDE_HEADER_PAGES = [
  {
    title: "Dashboard",
    icon: <Home sx={{ color: "#7194FF" }} />,
    isSelected: true,
  },
  {
    title: "Reports",
    icon: <Assessment sx={{ color: "gray" }} />,
    isSelected: false,
  },
  {
    title: "Tasks",
    icon: <AssignmentTurnedInIcon sx={{ color: "gray" }} />,
    isSelected: false,
  },
  {
    title: "Wallet",
    icon: <AccountBalanceWallet sx={{ color: "gray" }} />,
    isSelected: false,
  },
  {
    title: "Cart",
    icon: <LocalMall sx={{ color: "gray" }} />,
    isSelected: false,
  },
  // {
  //   title: 'SuperAdmin',
  //   route: PAGE_ROUTE_CONSTANTS.SUPERADMIN,
  //   icon: <AdminPanelSettings />,
  // },
];

const LeftSideBar = () => {
  const theme = useTheme();
  const [headerMenu, setHeaderMenu] = useState([]);

  useEffect(() => {
    setHeaderMenu(SIDE_HEADER_PAGES);
  }, []);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          marginTop: theme.spacing(8.1),
          height: "93vh !important",
          boxSizing: "border-box",
          backgroundColor: theme.palette.background.paper,
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          overflowX: "hidden",
          "&:hover": {
            width: expandedDrawerWidth,
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          },
        },
      }}
    >
      <List sx={{ backgroundColor: Color.BackgroundPrimary }}>
        {headerMenu.map((page) => (
          <ListItemButton key={page.title}>
            <ListItemIcon>{page.icon}</ListItemIcon>
            <ListItemText
              sx={{
                fontWeight: "600",
                color: page.isSelected ? "#7194FF" : "white",
              }}
              primary={page.title}
            />
          </ListItemButton>
        ))}
      </List>
      <div style={{ flexGrow: 1, backgroundColor: Color.BackgroundPrimary }} />
      <List sx={{ backgroundColor: Color.BackgroundPrimary }}>
        <ListItemButton>
          <ListItemIcon>
            <PowerSettingsNewIcon sx={{ color: "gray" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "white" }} primary="Settings" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default LeftSideBar;
