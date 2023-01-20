import React, { useContext, useMemo } from "react";
import { MoviesContext } from "../App";

function MovieList() {
  const {movies} = useContext(MoviesContext);

  // sorting movies before rendering
  const sortedMovies=useMemo(()=>{
    let temp=movies.sort((a,b)=>{
      return parseFloat(b.duration)-parseFloat(a.duration)
    })
    return temp
  },[movies])

  return (
    <div className=" flex-column w-100">
      {sortedMovies.map((ele) => {
        return <div key={ele.name} hidden={ele.hidden} className="card flex-row justify-content-between p-2 rounded-0 border boreder-bottom">
          <span>
            <h5 className="mb-1">{ele.name}</h5>
            <p className="m-0">Ratings: {ele.rating}/100</p>
          </span>
          <span className="text-muted">
            {ele.duration}
          </span>
        </div>;
      })}
    </div>
  );
}

export default MovieList;
