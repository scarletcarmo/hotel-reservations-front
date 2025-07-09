import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del login:", formData);
  };

  
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Iniciar Sesión
        </Typography>
        <Box component="form" onSubmit={onSubmit} sx={{ mt: 3 }}>
          <TextField
            required
            fullWidth
            label="Correo electrónico"
            name="email"
            type="email"
            margin="normal"
            value={formData.email}
            onChange={onChange}
          />
          <TextField
            required
            fullWidth
            label="Contraseña"
            name="password"
            type="password"
            margin="normal"
            value={formData.password}
            onChange={onChange}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
            Ingresar
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
