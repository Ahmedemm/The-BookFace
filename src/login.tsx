import React from 'react';
import { Container, Paper, Typography, TextField, Button } from '@mui/material';

const LoginPage: React.FC = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Typography variant="h5" style={{ textAlign:'center'}}>Connexion</Typography>
      <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <form style={{ width: '100%', marginTop: 20 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
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
