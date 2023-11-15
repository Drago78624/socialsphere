import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const Comment = () => {
  return (
    <Box mb={2} display="flex" gap={2}>
      <Avatar>M</Avatar>
      <Typography>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
        illum!
      </Typography>
    </Box>
  );
};

export default Comment;
