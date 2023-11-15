import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CopyRight from "../components/CopyRight";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email().required("Please enter an email"),
    password: yup
      .string()
      .min(8, "Password must be atleast 8 characters")
      .required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords do not match")
      .required("Please confirm your password"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onRegister = (data) => {
    setLoading(true);
    try {
      console.log(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useDocumentTitle("Register");

  return (
    <Container
      component="main"
      sx={{ display: "flex", minHeight: "100vh", alignItems: "center" }}
      maxWidth="xs"
    >
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onRegister)}
          noValidate
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                {...register("firstName")}
              />
              <Box
                component="span"
                sx={{ display: "inline-block", marginTop: 1 }}
                color="red"
              >
                {errors.firstName && errors.firstName.message}
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                {...register("lastName")}
              />
              <Box
                component="span"
                sx={{ display: "inline-block", marginTop: 1 }}
                color="red"
              >
                {errors.lastName && errors.lastName.message}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                {...register("email")}
              />
              <Box
                component="span"
                sx={{ display: "inline-block", marginTop: 1 }}
                color="red"
              >
                {errors.email && errors.email.message}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                {...register("password")}
              />
              <Box
                component="span"
                sx={{ display: "inline-block", marginTop: 1 }}
                color="red"
              >
                {errors.password && errors.password.message}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                {...register("confirmPassword")}
              />
              <Box
                component="span"
                sx={{ display: "inline-block", marginTop: 1 }}
                color="red"
              >
                {errors.confirmPassword && errors.confirmPassword.message}
              </Box>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </Box>
        <CopyRight sx={{ mt: 5 }} />
      </Box>
    </Container>
  );
};

export default Register;
