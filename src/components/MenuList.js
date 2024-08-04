import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { Color } from "../constants/Colors";

const MenuList = () => {
  const menuItems = [
    {
      text: "Goals",
      icon: <StarIcon sx={{ color: "orange" }} />,
      bgColor: "#4b2c2c",
    },
    {
      text: "Popular Dishes",
      icon: <FastfoodIcon sx={{ color: "#5856D6" }} />,
      bgColor: "#2c3c4b",
    },
    {
      text: "Menus",
      icon: <RestaurantMenuIcon sx={{ color: "#4bb2c2" }} />,
      bgColor: "#2c3b4b",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: 300,
        backgroundColor: Color.BackgroundPrimary,
        borderRadius: 2,
        padding: 2,
        color: "white",
      }}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: index !== menuItems.length - 1 ? 1 : 0,
              padding: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  backgroundColor: item.bgColor,
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  color: "white",
                  fontWeight: "bold",
                  marginLeft: 2,
                }}
              />
            </Box>

            <IconButton
              size="20px"
              edge="end"
              aria-label="arrow"
              sx={{ color: "grey.500" }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MenuList;
