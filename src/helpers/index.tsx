export const getFormattedTemp = (unit: string, temp: any) => {
  let formattedTemp;
  if (!temp) {
    formattedTemp = "C";
  } else if (unit === "F") {
    formattedTemp = Math.round(parseFloat(temp) * 1.8 + 32) + "°F";
  } else {
    formattedTemp = Math.round(parseFloat(temp) - 273.15) + "°C";
  }
  return formattedTemp;
};
