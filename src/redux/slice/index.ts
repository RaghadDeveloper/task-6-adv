import { createSlice } from "@reduxjs/toolkit";
import { blogs } from "../../data/blogs";

const initialState = {
  blogs: blogs,
  currentPage: 1,
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = blogsSlice.actions;
export default blogsSlice.reducer;
