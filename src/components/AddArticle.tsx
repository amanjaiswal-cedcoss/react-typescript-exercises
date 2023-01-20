import React, { useRef } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { addArticle } from "../redux/articlesSlice";
import {article,store} from 'typesall'

function AddArticle() {
  const dispatch = useDispatch();
  const useAppSelector: TypedUseSelectorHook<store> = useSelector;
  const articles = useAppSelector((state) => state.articlesReducer.articles);
  const refTitle=useRef<HTMLInputElement>(null)
  const refDesc=useRef<HTMLInputElement>(null)

  const addArticleHandler=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(refTitle.current!==null && refDesc.current!==null){
        let article:article={
            id:articles.length+1,
            title:refTitle.current.value,
            body:refDesc.current.value,
        }
        dispatch(addArticle(article))
        e.currentTarget.reset()
    }
  }

  return (
    <form className="card shadow p-4 border-0 my-4 rounded-4" onSubmit={(e)=>{addArticleHandler(e)}}>
      <div className="mb-3">
        <input placeholder="Enter Title" required ref={refTitle}  type="text"  className="form-control rounded-4 border-info border-2"/>
      </div>
      <div className="mb-3">
        <input placeholder="Enter Description" required ref={refDesc}  type="text"  className="form-control rounded-4 border-info border-2"/>
      </div>
      <button type="submit" className="btn btn-info rounded-pill w-100 text-white py-2">
        Add Article
      </button>
    </form>
  );
}

export default AddArticle;
