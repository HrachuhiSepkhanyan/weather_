import React from "react";
import { Radio } from "@mui/material";
import { useContext } from "react";
import { UnitContext } from "../context/unit";

const Temp = () => {
  const { unit, setUnit } = useContext(UnitContext);

  const setTemperatureUnit = (unit: string) => () => {
    setUnit(unit);
  };

  return (
    <button>
      <Radio
        checked={unit === "C"}
        onClick={setTemperatureUnit("C")}
        value="C"
        name="radio-buttons"
        inputProps={{ "aria-label": "C" }}
      />
      <label>°C</label>
      <Radio
        checked={unit === "F"}
        onChange={setTemperatureUnit("F")}
        value="F"
        name="radio-buttons"
        inputProps={{ "aria-label": "F" }}
      />
      <label>°F</label>
    </button>
  );
};

export default Temp;
