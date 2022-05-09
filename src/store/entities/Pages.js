import { createSlice } from "@reduxjs/toolkit";

const pages = createSlice({
  name: "pages",
  initialState: { 
    "pages": 1, 
    "currentPage": 1,
    "forwardPage": 1,
    "backwardPage": 1, 
  },
  reducers: {
    setPages: (state, { payload }) => {
      state.pages = payload.pages;
    },
    setCurrentPage: (state, { payload }) => {
      let { pages } = state;
      state.currentPage = payload.currentPage;
      state.forwardPage = state.currentPage === pages 
        ? 1 
        : state.currentPage + 1;
      state.backwardPage = state.currentPage === 1 
        ? pages 
        : state.currentPage - 1;
    },
  }
})

export const { setPages, setCurrentPage } = pages.actions;
export default pages.reducer;