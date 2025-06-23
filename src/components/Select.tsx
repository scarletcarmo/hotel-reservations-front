import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import places from "../data/places.json";

interface SelectProps {
  value: Place | null;
  setValue: (value: Place | null) => void;
}

const Select = ({ value, setValue }: SelectProps) => {
  console.log("value", value);

  const filter = createFilterOptions<Place>();

  const onFilterOptions = (options: Place[], params: any) => {
    const filtered = filter(options, params);
    //const { input } = params;
    //const isExists = filtered.some((e) => input === e.title);
    /*if (!isExists) {
      return [
        {
          title: "Ese destino no existe",
          disabled: true,
        },
      ];
    }*/

    return filtered;
  };

  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(e, value) => {
          console.log("Seleccionado:", value);
          setValue(value);
        }}
        onInputChange={(event, newInputValue) => {
          console.log("Escribiendo:", newInputValue); // <--- Aquí capturas el texto del input
        }}
        options={Places}
        filterOptions={onFilterOptions}
        selectOnFocus
        clearOnBlur
        getOptionLabel={(option) => option.title}
        renderOption={(props, option) => {
          const { key, ...optionProps } = props;
          return (
            <li key={key} {...optionProps}>
              {option.title}
            </li>
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Selecciona un destino"
            variant="outlined"
          />
        )}
      ></Autocomplete>
    </div>
  );
};

interface Place {
  title: string;
}
const Places: Place[] = places;

console.log(Places);

export default Select;
