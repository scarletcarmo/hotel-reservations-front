// src/components/UsersList.tsx
import React, { useEffect, useState } from "react";
import { getUsers } from "../../../api/userApi";

interface User {
  id: number;
  username: string;
  email: string;
  role_id: string;
}

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
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
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.username}</li>
      ))}
    </ul>
  );
};

export default UsersList;
