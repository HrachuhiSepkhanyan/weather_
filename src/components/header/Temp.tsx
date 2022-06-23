import React from "react";
import { Radio } from "@mui/material";
import { useContext } from "react";
import { UnitContext } from "../../context/unit";

const Temp = () => {
  const { unit, setUnit } = useContext(UnitContext);
  const setTemperatureUnit = (unit: string) => () => {
    setUnit(unit);
  };

  return (
    <button value="C">
      <Radio
        onChange={setTemperatureUnit("C")}
        checked={unit === "C"}
        name="radio-buttons"
      />
      <label>°C</label>
      <Radio
        onChange={setTemperatureUnit("F")}
        checked={unit === "F"}
        name="radio-buttons"
      />
      <label>°F</label>
    </button>
  );
};

export default Temp;
