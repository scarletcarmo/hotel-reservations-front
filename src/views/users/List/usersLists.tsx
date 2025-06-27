// src/components/UsersList.tsx
import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../../../api/usersApi';

interface User {
  id: number;
  name: string;
}

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch(() => setError('No se pudieron cargar los usuarios'));
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UsersList;
