import { createSlice } from "@reduxjs/toolkit";
import { blogs } from "../../data/blogs";

const initialState = {
  blogs: blogs,
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
});

export default blogsSlice.reducer;
