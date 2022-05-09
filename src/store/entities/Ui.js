import { createSlice } from "@reduxjs/toolkit";

const sorting = createSlice({
  name: "ui",
  initialState: { 
    "id": true, 
    "title": true, 
    "description": true
  },
  reducers: {
    switchSorting: (state, { payload }) => {
      const { key } = payload;
      state[key] = !state[key];
    }
  }
})

export const { switchSorting } = sorting.actions;
export default sorting.reducer;