import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Button from "@mui/material/Button";
import Select from "./Select";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import places from "../data/places.json";
import ReservationButton from "./ReservationButton";

const Filter = () => {
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [value, setValue] = useState<Place | null>(null);

  const onFilter = () => {};
  return (
    <Card sx={{ display: "flex" }}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid size={3}>
              <DatePicker
                disableFuture
                label="Llegada"
                views={["year", "month", "day"]}
                value={startDate}
                onChange={(value) => {
                  setStartDate(value);
                }}
                slotProps={{
                  field: { clearable: true },
                }}
              ></DatePicker>
            </Grid>
            <Grid size={3}>
              <DatePicker
                disableFuture
                label="Salida"
                minDate={startDate ?? undefined}
                views={["year", "month", "day"]}
                value={endDate}
                onChange={(value) => {
                  setEndDate(value);
                }}
                slotProps={{
                  field: { clearable: true },
                }}
              ></DatePicker>
            </Grid>
            {/* Selector */}
            <Grid size={4}>
              <Select value={value} setValue={setValue} />
            </Grid>
            <Grid size={1}>
              <Button fullWidth variant="contained" onClick={onFilter}>
                Filtrar
              </Button>
            </Grid>
          </LocalizationProvider>
        </Grid>
        <br />
        {/* Reservation */}
        <ReservationButton />
      </CardContent>
    </Card>
  );
};

interface Place {
  title: string;
}
const Places: Place[] = places;

console.log(Places);

export default Filter;
