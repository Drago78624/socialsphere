import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import App from "./App";
import Error from "./pages/Error";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Profile from "./pages/Profile";
import { indigo, pink } from "@mui/material/colors";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: indigo,
    secondary: pink,
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <App />,
  },
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
  { path: "profile/:id", element: <Profile /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
