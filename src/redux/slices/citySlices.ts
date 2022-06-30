import { createSlice } from "@reduxjs/toolkit";

interface ICityState {
  cities: string[];
}

const initialState: ICityState = {
  cities: localStorage.getItem("cities")?.split(",") || [],
};

export const citySlice = createSlice({
  name: "city",
  initialState: initialState,
  reducers: {
    addCity: (state, action) => {
      const name: string = action.payload;
      state.cities.push(name);
      localStorage.setItem("cities", state.cities.join(","));
    },
    removeCity: (state, action) => {
      const i: number = action.payload;
      state.cities.splice(i, 1);
      localStorage.setItem("cities", state.cities.join(","));
    },
  },
});
const { actions, reducer } = citySlice;

export const { addCity, removeCity } = actions;

export default reducer;
