import { createSlice } from "@reduxjs/toolkit";

interface ICityState {
  names: string[];
}

const initialState: ICityState = {
  names: localStorage.getItem("cities")?.split(",") || [],
};

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    addCity: (state, action) => {
      const name: string = action.payload;

      state.names.push(name);
      localStorage.setItem("cities", state.names.join(","));
    },
    removeCity: (state, action) => {
      const index: number = action.payload;

      state.names.splice(index, 1);
      localStorage.setItem("cities", state.names.join(","));
    },
  },
});
export const { addCity, removeCity } = citySlice.actions;

export default citySlice.reducer;
