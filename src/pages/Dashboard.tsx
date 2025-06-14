import { Link } from "react-router-dom";
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p>Esta es la vista del Dashboard</p>
      <Link to="/">Volver al Home</Link>
    </div>
  );
};

export default Dashboard;


