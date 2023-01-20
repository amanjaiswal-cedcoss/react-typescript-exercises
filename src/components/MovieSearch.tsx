import React, { useContext, useRef } from "react";
import { MoviesContext } from "../App";
import { movie } from "../types";

function MovieSearch() {
  const refSearch = useRef<HTMLInputElement>(null);
  const { movies, setMovies,setNotFound } = useContext(MoviesContext);

  // onchange handler function for filtering matched movies
  const searchMovie = () => {
    // checking for null value of ref's current property
    if (refSearch.current !== null) {
      let temp:movie[]=[]
      // condition to make sure more than 1 character is entered in search input
      if (refSearch.current.value.length > 1) {
        let search = refSearch.current.value;
        // traversing the original array and changing hidden property values to show only matching movies
         movies.forEach((ele) => {
          if (ele.name.slice(0,search.length).toLowerCase() === search.toLowerCase()) {
            temp.push({...ele,hidden :false})
          }
          else{
            temp.push({...ele,hidden :true})
          }
        });
        checkFailedSearch(temp)
        //typescript requires checking of null before use 
        if(setMovies!==null && temp!==undefined){
          setMovies([...temp])
        }
      }
      else{
        temp=movies.map(ele=>{
          return {...ele,hidden:false}
        })
        checkFailedSearch(temp)
          //typescript requires checking of null before use 
        if(setMovies!==null){
        setMovies([...temp])
        }

      }
    }
  };

  // function to check for failed search depending on length of array
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
