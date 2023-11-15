import React from "react";
import { useRouteError } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  useDocumentTitle("Error");

  return (
    <Box
      id="error-page"
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Box>
        <Typography variant="h2" marginBottom={2}>Oops!</Typography>
        <Typography paragraph={true} fontSize="1.5rem" fontWeight={300}>
          Sorry, an unexpected error has occurred.
        </Typography>
        <Typography variant="subtitle1" fontSize="1.2rem">
          <i>{error.statusText || error.message}</i>
        </Typography>
      </Box>
    </Box>
  );
};

export default Error;
