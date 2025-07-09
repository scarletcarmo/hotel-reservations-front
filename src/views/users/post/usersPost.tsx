import { Button, FormControl, TextField, Typography } from "@mui/material";
import useUserForm from "../../../hooks/useUserForm";
import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";

interface FormData {
  username: "";
  password: "";
  email: "";
  role_id: 0;
}
const UsersPost = () => {
  const { formData, onChange, postUser } = useUserForm<FormData>({
    username: "",
    password: "",
    email: "",
    role_id: 0,
  });
  //para navegar
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    const success = await postUser(e);
    console.log("componente", success);
    
    if (success) {
      setSnackbarMessage("Usuario creado exitosamente");
    } else {
      setSnackbarMessage("Hubo un error al crear el usuario");
    }
    setOpenSnackbar(true);
  };

  return (
    <form onSubmit={onSubmit}>
      <Typography variant="h6" gutterBottom>
        Registrar usuario
      </Typography>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Usuario"
          name="username"
          value={formData.username}
          onChange={onChange}
          required
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Contraseña"
          name="password"
          type="password"
          value={formData.password}
          onChange={onChange}
          required
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Correo Electrónico"
          name="email"
          type="email"
          value={formData.email}
          onChange={onChange}
          required
        />
      </FormControl>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
      {/*<FormControl fullWidth margin="normal">
        <FormLabel component="legend">Rol</FormLabel>
        <Select name="rol" value={formData.rol} onChange={onChange} required>
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="user">User</MenuItem>
          <MenuItem value="guest">Guest</MenuItem>
        </Select>
      </FormControl>*/}

      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
      {/*<button type="button" onClick={onResetForm}>
        Limpiar formulario
      </button>*/}
    </form>
  );
};

export default UsersPost;
