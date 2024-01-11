import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, Avatar } from '@mui/material';

const RegisterPage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dateOfBirth, setDateOfBirth] = useState<string>('');
  const [isOver16, setIsOver16] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleDateOfBirthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateOfBirth(event.target.value);
    // Vous pouvez également ajouter une validation de date de naissance ici
    const age = calculateAge(event.target.value);
    setIsOver16(age >= 16);
  };

  const calculateAge = (birthDate: string): number => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }

    return age;
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography variant="h5" style={{ textAlign: 'center' }}>
        Inscription
      </Typography>
      <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar src={selectedFile ? URL.createObjectURL(selectedFile) : undefined} style={{ width: 60, height: 60, marginBottom: 10 }} />
        <form style={{ width: '100%', marginTop: 20 }}>
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="profile-picture-input"
            type="file"
            onChange={handleFileChange}
          />
          <label htmlFor="profile-picture-input">
            <Button variant="outlined" component="span" style={{ marginBottom: 10, alignItems: 'center', display: 'flex' }}>
              Ajouter une photo
            </Button>
          </label>
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
            id="Nom"
            label="Nom"
            name="Nom"
            autoComplete="Nom"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Prenom"
            label="Prenom"
            name="Prenom"
            autoComplete="Prenom"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email"
            type="email"
            id="email"
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
            autoComplete="new-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="date"
            label="Date of Birth"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={handleDateOfBirthChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          {isOver16 ? null : (
            <Typography color="error" style={{ marginTop: 10 }}>
              Vous devez avoir au moins 16 ans pour vous inscrire.
            </Typography>
          )}
          <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: 20 }} disabled={!isOver16}>
            Register
          </Button>
        </form>
        <p>
          Vous êtes déjà inscrit ? <a href="/login">Connectez-vous</a>
        </p>
      </Paper>
    </Container>
  );
};

export default RegisterPage;
