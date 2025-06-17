import { Link } from "react-router-dom";
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Bienvenido a Nuestro Sistema</h1>
        <p>Gestiona tus reservas, ofertas y mucho más desde un solo lugar.</p>
        <button className="home-button">Explorar</button>
      </div>
    </div>
  );
};

export default Dashboard;


