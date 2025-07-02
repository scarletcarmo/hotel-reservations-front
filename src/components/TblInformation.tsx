import Paper from "@mui/material/Paper";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { UserModel } from "../models/userModel";
import { Button } from "@mui/material";
import { AddIcCallOutlined } from "@mui/icons-material";

export type CardInformationProps = {
  username: string;
  email: string;
  role_id: number; // ajusta según el tipo real
};

const columns: GridColDef[] = [
  { field: "id", headerName: "N.", width: 70 },
  { field: "username", headerName: "Usuario", width: 130 },
  { field: "email", headerName: "Email", width: 130 },
  { field: "rol", headerName: "Rol", width: 90 },
  { field: "actions", headerName: "actions", width: 150 },
];

const paginationModel = { page: 0, pageSize: 5 };

type TblInformationProps = {
  users: UserModel[];
};

const TblInformation = ({ users }: TblInformationProps) => {
  const rows = users.map((user, index) => ({
    id: index + 1,
    username: user.username,
    email: user.email,
    role: user.role_id || "Desconocido",
  }));

  const handleCreate = () => {
    console.log("Crear usuario nuevo");
    // Abrir formulario para crear nuevo usuario
  };
  
  return (
    <Paper>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
      <Button
        variant="contained"
        startIcon={<AddIcCallOutlined />}
        sx={{ mb: 2 }}
        onClick={handleCreate}
      >
        Crear Usuario
      </Button>
    </Paper>
  );
};

export default TblInformation;
