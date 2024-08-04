import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Avatar,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Box } from "@mui/system";
import { Color } from "../constants/Colors";

const feedbacks = [
  {
    id: 1,
    name: "Jenny Wilson",
    stars: 5,
    feedback:
      "The food was excellent and so was the service. Very conscientious about gluten allergies.",
  },
  {
    id: 2,
    name: "Dianne Russell",
    stars: 5,
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
  },
  {
    id: 3,
    name: "Devon Lane",
    stars: 4,
    feedback: "The wings are lean meaty and tender, and very spicy.",
  },
  {
    id: 4,
    name: "Devon Lane",
    stars: 4,
    feedback: "The wings are lean meaty and tender, and very spicy.",
  },
  {
    id: 5,
    name: "Devon Lane",
    stars: 4,
    feedback: "The wings are lean meaty and tender, and very spicy.",
  },
];

const Feedback = () => {
  return (
    <Box
      sx={{
        backgroundColor: Color.BackgroundPrimary,
        borderRadius: "10px",
        height: 430,
        overflow: "hidden",
      }}
    >
      <Box sx={{ padding: "10px", marginLeft: "10px" }}>
        <Typography
          sx={{
            color: "white",
            fontSize: "20px",
            fontWeight: "600",
            position: "sticky",
          }}
          gutterBottom
        >
          Customer's Feedback
        </Typography>
      </Box>
      <Box
        sx={{
          height: 390,
          overflowY: "scroll",
          width: "100%",
          "&::-webkit-scrollbar": {
            width: "7px",
            height: "7px",
          },

          "&::-webkit-scrollbar-thumb": {
            background: "#f1f1f1",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#555",
          },
        }}
      >
        <List>
          {feedbacks.map((feedback) => (
            <ListItem key={feedback.id} alignItems="flex-start">
              <Avatar sx={{ bgcolor: "primary.main", mr: 2 }}>
                {feedback.name[0]}
              </Avatar>
              <Box>
                <Typography variant="h6" color={"white"}>
                  {feedback.name}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  {[...Array(feedback.stars)].map((_, i) => (
                    <StarIcon key={i} sx={{ color: "gold" }} />
                  ))}
                  {[...Array(5 - feedback.stars)].map((_, i) => (
                    <StarIcon key={i} sx={{ color: "white" }} />
                  ))}
                </Box>
                <ListItemText
                  sx={{
                    "& .MuiListItemText-secondary": {
                      color: "gray",
                    },
                  }}
                  secondary={feedback.feedback}
                />
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Feedback;
