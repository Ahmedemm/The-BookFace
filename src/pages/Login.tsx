import React from "react";
import { Container, Paper, Typography, TextField, Button } from "@mui/material";
import { login } from "../api/login";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const signIn = useSignIn();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    e.preventDefault();
    login({ email, password })
      .then((response) => {
        const {
          email: userEmail,
          username,
          firstname,
          lastname,
        } = response.data;

        signIn({
          auth: {
            token: response.data.token,
            type: "Bearer",
          },
          userState: { email: userEmail, username, firstname, lastname },
        });
        navigate("/");
      })
      .catch();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography variant="h5" style={{ textAlign: "center" }}>
        Connexion
      </Typography>
      <Paper
        elevation={3}
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <form style={{ width: "100%", marginTop: 20 }} onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: 20 }}
          >
            Login
          </Button>
        </form>
        <p>Vous n'etes pas inscrit ? </p> <a href="/register">Inscrivez-vous</a>
      </Paper>
    </Container>
  );
};

export default LoginPage;
