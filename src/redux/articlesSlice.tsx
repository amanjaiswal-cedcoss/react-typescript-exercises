import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [
    {
      id: 1,
      title: "Article 1",
      body:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
    {
      id: 2,
      title: "Article 2",
      body:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
    {
      id: 3,
      title: "Article 3",
      body:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
  ],
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    addArticle: (state, action) => {
      state.articles.push(action.payload);
    },
    removeArticle: (state, action) => {
      state.articles.splice(action.payload, 1);
    },
  },
});

export const { addArticle,removeArticle } = articlesSlice.actions;
export default articlesSlice.reducer;
