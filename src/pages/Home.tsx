import { Link } from "react-router-dom";
import "./Home.css";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Alert from "@mui/material/Alert";

const Home = () => {
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
  const [cleared, setCleared] = useState<boolean>(false);

  useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);

  return (
    <div className="home-container">
      <h1>Home</h1>
      <p>Bienvenido a la página de inicio</p>
      <hr />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Selecciona una fecha"
          value={startDate}
          views={["year", "month", "day"]}
          onChange={(date) => {
            if (date !== null) {
              setStartDate(date);
            }
          }}
          slotProps={{
            field: { clearable: true, onClear: () => setCleared(true) },
          }}
        />
        {cleared && (
          <Alert
            sx={{ position: "absolute", bottom: 0, right: 0 }}
            severity="success"
          >
            Field cleared!
          </Alert>
        )}
      </LocalizationProvider>
      <Link to="/dashboard">Ir al Dashboard</Link>
    </div>
  );
};

export default Home;
