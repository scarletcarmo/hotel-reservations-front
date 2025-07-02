// src/components/UsersList.tsx
import React, { useEffect, useState } from "react";
import { getUsers } from "../../../api/userApi";
import TblInformation from "../../../components/TblInformation";
import { UserModel } from "../../../models/userModel";

const UsersList = () => {
  const [users, setUsers] = useState<UserModel[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getUsers();
        setUsers(response.data);
      } catch {
        setError("Error al cargar la data");
      }
    }
    fetchData();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div>
      <TblInformation users={users} />
    </div>
  );
};

export default UsersList;
