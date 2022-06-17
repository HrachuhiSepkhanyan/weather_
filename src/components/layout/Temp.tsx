import React, { useState } from "react";
import { Radio } from "@mui/material";

const Temp = () => {
  const [temp, setTemp] = useState("C");
  const setTemperature = (temp: string) => () => {
    setTemp(temp);
  };

  return (
    <button>
      <Radio
        checked={temp === "C"}
        onChange={setTemperature("C")}
        value="a"
        name="radio-buttons"
        inputProps={{ "aria-label": "A" }}
      />
      <label>°C</label>
      <Radio
        checked={temp === "F"}
        onChange={setTemperature("F")}
        value="b"
        name="radio-buttons"
        inputProps={{ "aria-label": "B" }}
      />
      <label>°F</label>
    </button>
  );
};

export default Temp;
