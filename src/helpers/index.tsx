export const getFormattedTemp = (unit: string, temp: any) => {
  let formattedTemp;
  if (!temp) {
    formattedTemp = "";
  } else if (unit === "F") {
    formattedTemp = Math.round((parseFloat(temp) - 273.15) * 1.8 + 32) + "°F";
  } else {
    formattedTemp = Math.round(parseFloat(temp) - 273.15) + "°C";
  }
  return formattedTemp;
};
