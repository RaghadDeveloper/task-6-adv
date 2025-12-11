import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "./../slice/index";

const store = configureStore({
  reducer: {
    blogs: blogsReducer,
  },
});

export default store;
