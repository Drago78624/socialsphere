import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navbar from "./components/Navbar";
import { Container, Fab } from "@mui/material";
import CreatePost from "./components/CreatePost";
import Posts from "./components/Posts";
import useDocumentTitle from "./hooks/useDocumentTitle";
import ScrollToTop from "./components/ScrollToTop";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const App = (props) => {
  useDocumentTitle("Home");

  return (
    <>
      <Navbar />
      <Container sx={{ padding: "10px" }} maxWidth="sm">
        <CreatePost />
        <Posts />
      </Container>
      <ScrollToTop {...props}>
        <Fab size="large" aria-label="scroll back to top">
          <KeyboardArrowUpIcon fontSize="large" />
        </Fab>
      </ScrollToTop>
    </>
  );
};

export default App;
