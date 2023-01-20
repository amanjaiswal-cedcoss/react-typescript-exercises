import React, { useContext, useRef } from "react";
import { MoviesContext } from "../App";
import { movie } from "../types";

function MovieSearch() {
  const refSearch = useRef<HTMLInputElement>(null);
  const { movies, setMovies,setNotFound } = useContext(MoviesContext);

  const searchMovie = () => {
    if (refSearch.current !== null) {
      let temp:movie[]=[]
      if (refSearch.current.value.length > 1) {
        let search = refSearch.current.value;
         movies.forEach((ele) => {
          if (ele.name.slice(0,search.length).toLowerCase() === search.toLowerCase()) {
            temp.push({...ele,hidden :false})
          }
          else{
            temp.push({...ele,hidden :true})
          }
        });
        checkFailedSearch(temp)
        if(setMovies!==null && temp!==undefined)
        setMovies([...temp])
      }
      else{
        temp=movies.map(ele=>{
          return {...ele,hidden:false}
        })
        checkFailedSearch(temp)
        if(setMovies!==null)
        setMovies([...temp])

      }
    }
  };

  const checkFailedSearch=(temp:movie[])=>{
    let length=temp.filter((ele)=>{return !ele.hidden}).length
        if(length>0){
          setNotFound!==null && setNotFound(false)
        }
        else{
          setNotFound!==null && setNotFound(true)
          throw new Error("No movies found!! :(");
        }
  }

  return (
    <input
      className="border-0 border-bottom border-dark rounded-0 w-75 m-0 mb-2 shadow card bg-light p-2"
      ref={refSearch}
      onChange={searchMovie}
      placeholder="Search for movies by name"
    />
  );
}

export default MovieSearch;
