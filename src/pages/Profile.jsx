import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Navbar from "../components/Navbar";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Fab,
  IconButton,
  Typography,
} from "@mui/material";
import ProfileTabs from "../components/ProfileTabs";
import ScrollToTop from "../components/ScrollToTop";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Profile = (props) => {
  useDocumentTitle("Profile");

  return (
    <>
      <Navbar />
      <Container sx={{ padding: "10px" }} maxWidth="sm">
        <Typography variant="h3" textAlign="center" mb={2}>
          Profile
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Box display="flex" gap={2} alignItems="center" p={2}>
            <Avatar>H</Avatar>
            <Typography>Muhammad Maaz Ahmed</Typography>
          </Box>
          <Box>
            {/* <Button variant="contained">Follow</Button> */}
            <ButtonGroup
              color="secondary"
              aria-label="medium secondary button group"
            >
              <IconButton>
                <DeleteIcon />
              </IconButton>
              <IconButton>
                <EditIcon />
              </IconButton>
            </ButtonGroup>
          </Box>
        </Box>
        <ProfileTabs />
      </Container>
      <ScrollToTop {...props}>
        <Fab size="large" aria-label="scroll back to top">
          <KeyboardArrowUpIcon fontSize="large" />
        </Fab>
      </ScrollToTop>
    </>
  );
};

export default Profile;
