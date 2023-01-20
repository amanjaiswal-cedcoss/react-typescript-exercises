import React,{useContext, useRef} from 'react'
import { MoviesContext } from '../App'

function MovieForm() {
    const refMovieName=useRef<HTMLInputElement>(null)
    const refRating=useRef<HTMLInputElement>(null)
    const refDuration=useRef<HTMLInputElement>(null)
    // ref for div conatining error message of invalid duration being submitted
    const refErrorAlert=useRef<HTMLDivElement>(null)

    const {movies,setMovies} = useContext(MoviesContext);

    const addMovie=(e:React.FormEvent<HTMLFormElement>)=>{
      // checking for any null values of all ref's current property
        if(refMovieName.current!==null &&refRating.current!==null &&refDuration.current!==null && refErrorAlert.current!==null){
          
          // condition to check inclusion of 'm' or 'h' at end of duration value 
          if(refDuration.current.value.charAt(refDuration.current.value.length-1)==='m' || refDuration.current.value.charAt(refDuration.current.value.length-1)==='h'){
            refErrorAlert.current.hidden=true
            let duration=refDuration.current.value
            if(refDuration.current.value.charAt(refDuration.current.value.length-1)==='m' ){
              // converting duration from minutes to hours
              duration=(parseInt(refDuration.current.value)/60).toFixed(2)+'h'
            }
            let obj={
              name:refMovieName.current.value,
              rating:refRating.current.value,
              duration:duration,
              hidden:false,
            }
            let temp=movies;
            temp.push(obj)
            if(setMovies!==null)
            setMovies([...temp])
            e.currentTarget.reset();
          }
          else{
            refErrorAlert.current.hidden=false
          }
        }
    }

  return (
    <form className="border border-dark m-2 align-items-end card p-4 d-inline-flex card rounded-0 shadow-sm border-0 App__childs"  onSubmit={(e)=>{e.preventDefault();addMovie(e)}}>
      <div className="mb-3 w-100">
        <label className="form-label fs-4 mb-0">Movie Name</label>
        <input ref={refMovieName} required type="text" className="form-control bg-light" id="moviename"/> 
      </div>
      <div className="mb-3 w-100">
        <label className="form-label fs-4 mb-0">Rating</label>
        <input ref={refRating} required type='number' className="form-control bg-light" id="rating"/> 
      </div>
      <div className="mb-3 w-100">
        <label className="form-label fs-4 mb-0">Duration <span className='shorttxt'>(e.g. 1.5h or 90m)</span></label>
        <input ref={refDuration} required type="text" className="form-control bg-light" id="duration"/> 
      </div>
      <div ref={refErrorAlert} className="alert alert-danger shorttxt" role="alert" hidden>
        Please specify duration in minutes or hours (e.g. 1.5h or 90m)
      </div>
      <button type="submit" className="btn btn-success rounded-0 ">Add Movie</button>
    </form>
  )
}

export default MovieForm