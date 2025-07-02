import Filter from "../components/Filter";
import "./Offerts.css";

const Offerts = () => {
  return (
    <div className="offerts-container">
      <h1>Ofertas</h1>
      <div className="offerts-content">
        <div className="offerts-list">
          <Filter />
        </div>
       { /*<CardInformation/>*/}
      </div>
    </div>
  );
};

export default Offerts;
