import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Home</h1>
      <p>Bienvenido a la página de inicio</p>
      <Link to="/dashboard">Ir al Dashboard</Link>
    </div>
  );
};

export default Home;


