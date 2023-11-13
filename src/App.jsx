import React, { useEffect } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navbar from "./components/Navbar";
import { Container } from "@mui/material";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";

const App = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <Navbar />
      <Container sx={{padding: "10px"}} maxWidth="sm">
        <CreatePost />
        <Post />
        <Post />
        <Post />
      </Container>
    </>
  );
};

export default App;
