import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import AddArticle from "./components/AddArticle";
import Articles from "./components/Articles";
import { store } from "./redux/store";

function App() {
  return (
    <div className="App">
      <h2 className="my-4">My Articles</h2>
      <Provider store={store}>
        <AddArticle />
        <Articles />
      </Provider>
    </div>
  );
}

export default App;
