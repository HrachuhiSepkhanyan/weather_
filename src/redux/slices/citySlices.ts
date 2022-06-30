import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cities: [""],
};

export const citySlice = createSlice({
  name: "city",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      const name: string = action.payload;
      state.cities.push(name);
      console.log(name);
    },
    remove: (state, action) => {
      const i: number = action.payload;
      state.cities.splice(i, 1);
    },
  },
});
const { actions, reducer } = citySlice;
export const { add, remove } = actions;
export default reducer;
