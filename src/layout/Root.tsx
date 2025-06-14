// src/layouts/Root.tsx
import "./Roots.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Root = () => {
  const [menuMovil, setMenuMovil] = useState(false);
  const changeMenuMovil = () => {
    setMenuMovil(!menuMovil);
  };

  return (
    <div className="navBar">
      <p>ICONO</p>
      <a className="iconMenuMovil" onClick={() => changeMenuMovil()} href="/">
        {menuMovil ? (
          <FontAwesomeIcon icon={faTimes} size="2x" />
        ) : (
          <FontAwesomeIcon icon={faBars} size="2x" />
        )}
      </a>
      <div className={menuMovil ? "navbar-items_open" : "navbar-items"}>
        {" "}
        <Link to="/">HOME</Link>
        <Link to="/dashboard">DASHBOARD</Link>
        <Link to="/reservations">MIS RESERVAS</Link>
        <Link to="/ofert">OFERTAS</Link>
        <Link to="/next">PRÓXIMAMENTE</Link>
        <Link to="/logout">LOGOUT</Link>
      </div>
    </div>
  );
};

export default Root;
