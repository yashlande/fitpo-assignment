import React from "react";
import { List, ListItem, ListItemText, Avatar } from "@mui/material";

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
    <List>
      {orders.map((order) => (
        <ListItem key={order.id}>
          <Avatar sx={{ bgcolor: "primary.main", mr: 2 }}>
            {order.name[0]}
          </Avatar>
          <ListItemText
            primary={`${order.name} - ${order.amount}`}
            secondary={`Order No: ${order.orderNo} - ${order.status}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default OrdersList;
