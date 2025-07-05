import {
  Button,
  FormControl,
  FormLabel,
  TextField,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import useUserForm from "../../../hooks/useUserForm";
import { useNavigate } from "react-router-dom";

interface FormData {
  username: "";
  password: "";
  email: "";
  role_id: 0;
}
const UsersPost = () => {
  const { formData, onChange, onSubmit, onResetForm } = useUserForm<FormData>({
    username: "",
    password: "",
    email: "",
    role_id: 0,
  });
  //para navegar
  
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
      <button type="button" onClick={onResetForm}>
        Limpiar formulario
      </button>
    </form>
  );
};

export default UsersPost;
