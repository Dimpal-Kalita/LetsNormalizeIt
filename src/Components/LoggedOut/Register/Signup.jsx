import React, { useState } from "react";

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";

import { LockOutlined } from "@mui/icons-material";

const Signup = () => {
  const [fill, setfill] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.name === "" || user.email === "" || user.password === "") {
      setfill(true);
      return;
    }
    setfill(false);
    console.log(user);
  };

  return (
    <Container component="main" maxWidth="x">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            autoComplete="name"
            margin="normal"
            name="name"
            required
            fullWidth
            id="name"
            label="Name"
            autoFocus
            onChange={(e) => onValueChange(e)}
          />
          <TextField
            autoComplete="email"
            margin="normal"
            name="email"
            required
            fullWidth
            id="email"
            label="Email"
            autoFocus
            onChange={(e) => onValueChange(e)}
          />
          <TextField
            autoComplete="password"
            margin="normal"
            name="password"
            required
            fullWidth
            id="password"
            label="Password"
            autoFocus
            onChange={(e) => onValueChange(e)}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
          {fill && <Typography color="red">* Please fill all the fields</Typography>}
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
