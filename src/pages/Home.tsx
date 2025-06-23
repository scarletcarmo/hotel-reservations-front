import { useState } from 'react';
import './Home.css';
import { useAuthContext } from '../context/AuthContext';
const Home = () => {
  const { login } = useAuthContext(); // usamos el contexto
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      await login(email, password); // llama al login del contexto
      alert('Login exitoso ');
      // Puedes redirigir, si quieres:
      // window.location.href = '/dashboard';
    } catch (err) {
      setError('Correo o contraseña incorrectos ');
    }
  };
  return (
    <div className="home-container">
      <h1>Home</h1>
      <p>Bienvenido a la página de inicio</p>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />

        <button type="submit">Iniciar Sesión</button>
      </form>
       {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Home;


