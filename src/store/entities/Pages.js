import { createSlice } from "@reduxjs/toolkit";

const pages = createSlice({
  name: "pages",
  initialState: { 
    "pages": 1, 
    "currentPage": 1, 
  },
  reducers: {
    setPages: (state, { payload }) => {
      state.pages = payload.pages;
    },
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload.currentPage;
    },
  }
})

export const { setPages, setCurrentPage } = pages.actions;
export default pages.reducer;