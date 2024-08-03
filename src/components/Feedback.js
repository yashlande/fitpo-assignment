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
];

const Feedback = () => {
  return (
    <List>
      {feedbacks.map((feedback) => (
        <ListItem key={feedback.id} alignItems="flex-start">
          <Avatar sx={{ bgcolor: "primary.main", mr: 2 }}>
            {feedback.name[0]}
          </Avatar>
          <Box>
            <Typography variant="h6">{feedback.name}</Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              {[...Array(feedback.stars)].map((_, i) => (
                <StarIcon key={i} sx={{ color: "gold" }} />
              ))}
            </Box>
            <ListItemText secondary={feedback.feedback} />
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default Feedback;
