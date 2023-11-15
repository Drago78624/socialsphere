import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const User = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={2}
      mb={2}
    >
      <Avatar>M</Avatar>
      <Typography>Muhammad Maaz Ahmed</Typography>
    </Box>
  );
};

export default User;
