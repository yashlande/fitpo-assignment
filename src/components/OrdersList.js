import React from "react";
import { Avatar, Box, Typography, Chip } from "@mui/material";
import { Color } from "../constants/Colors";

const orders = [
  {
    id: 1,
    name: "Wade Warren",
    orderNo: "15478256",
    amount: "$124.00",
    status: "Delivered",
  },
  {
    id: 2,
    name: "Jane Cooper",
    orderNo: "48967586",
    amount: "$305.00",
    status: "Delivered",
  },
  {
    id: 3,
    name: "Guy Hawkins",
    orderNo: "78985215",
    amount: "$45.88",
    status: "Cancelled",
  },
  {
    id: 4,
    name: "Kristin Watson",
    orderNo: "20965732",
    amount: "$65.00",
    status: "Pending",
  },
  {
    id: 5,
    name: "Cody Fisher",
    orderNo: "95715620",
    amount: "$545.00",
    status: "Delivered",
  },
  {
    id: 6,
    name: "Savannah Nguyen",
    orderNo: "78514568",
    amount: "$128.20",
    status: "Delivered",
  },
];

const OrdersList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: "10px",
        borderRadius: "10px",
        backgroundColor: Color.BackgroundPrimary,
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontSize: "20px",
          fontWeight: "600",
          marginBottom: "20px",
        }}
        gutterBottom
      >
        Recent Orders
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderBottom: "1px solid gray",
          paddingBottom: "5px",
        }}
      >
        <Box sx={{ display: "flex", flex: 1 }}>
          <Typography
            sx={{ color: "white", fontSize: "12px", fontWeight: "600" }}
          >
            Customer
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flex: 1 }}>
          <Typography
            sx={{ color: "white", fontSize: "12px", fontWeight: "600" }}
          >
            Order No.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flex: 1 }}>
          <Typography
            sx={{ color: "white", fontSize: "12px", fontWeight: "600" }}
          >
            Amount
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flex: 1 }}>
          <Typography
            sx={{ color: "white", fontSize: "12px", fontWeight: "600" }}
          >
            Status
          </Typography>
        </Box>
      </Box>
      {orders.map((order) => (
        <Box
          key={order.id}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderBottom: "1px solid gray",
            paddingBottom: "5px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              height: "50px",
            }}
          >
            <Avatar
              sx={{
                bgcolor: "primary.main",
                mr: 1,
                width: "30px",
                height: "30px",
              }}
            >
              {order.name[0]}
            </Avatar>
            <Typography sx={{ color: "white", fontSize: "12px" }}>
              {order.name}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flex: 1 }}>
            <Typography sx={{ color: "white", fontSize: "12px" }}>
              {order.orderNo}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flex: 1 }}>
            <Typography sx={{ color: "white", fontSize: "12px" }}>
              {order.amount}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flex: 1,
            }}
          >
            <Chip
              label={order.status}
              color={order.status === "Delivered" ? "success" : "error"}
            />
          </Box>
        </Box>
      ))}
    </Box>
    // <List>
    //   {orders.map((order) => (
    //     <ListItem key={order.id}>
    //       <Avatar sx={{ bgcolor: "primary.main", mr: 2 }}>
    //         {order.name[0]}
    //       </Avatar>
    //       <ListItemText
    //         primary={`${order.name} - ${order.amount}`}
    //         secondary={`Order No: ${order.orderNo} - ${order.status}`}
    //       />
    //     </ListItem>
    //   ))}
    // </List>
  );
};

export default OrdersList;
