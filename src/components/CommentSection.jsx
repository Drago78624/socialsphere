import { Avatar, Box, Button, TextField } from "@mui/material";
import React from "react";
import Comment from "./Comment";

const CommentSection = () => {
  return (
    <Box boxShadow="2px 2px 10px #000">
      <Box height="200px" overflow="auto" p={2}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </Box>
      <Box display="flex" gap={2} alignItems="center" p={2}>
        <Avatar>M</Avatar>
        <TextField fullWidth id="filled-basic" label="Write a comment..." variant="filled" />
      </Box>
    </Box>
  );
};

export default CommentSection;
