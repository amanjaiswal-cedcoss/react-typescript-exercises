import React from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { store } from "../types";
import {removeArticle} from '../redux/articlesSlice'

function Articles() {
  const dispatch = useDispatch();
  const useAppSelector: TypedUseSelectorHook<store> = useSelector;
  const articles = useAppSelector((state) => state.articlesReducer.articles);
  return (
    <>
      {articles.map((ele,i) => {
        return (
          <div className='card shadow p-4 border-0 my-4 rounded-4 flex-row align-items-center'>
            <span className="text-start">
              <h3>{ele.title}</h3>
              <p>{ele.body}</p>
            </span>
            <button onClick={()=>{dispatch(removeArticle(i))}} className="btn btn-danger rounded-pill text-white">Delete</button>
          </div>
        );
      })}
    </>
  );
}

export default Articles;
