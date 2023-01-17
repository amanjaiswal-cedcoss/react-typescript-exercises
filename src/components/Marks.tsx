import React, { useRef } from 'react'
import { MarksProps } from '../types'

function Marks(props:MarksProps) {
    const refId=useRef<HTMLInputElement>(null);
  return (
    <div className='border border-dark m-2 card p-4 d-inline-block'>
        <h4>Marks Component</h4>
        <p>Marks: {props.marks.join(',')}</p>
        <table className='w-auto m-auto table table-bordered my-2'>
            <thead>
            <tr><th className='p-1'>Book Id</th><th className='p-1'>Book Name</th></tr>
            </thead>
            <tbody>
                {props.books.map(ele=>{return <tr key={ele.id}><td className='p-1'>{ele.id}</td><td className='p-1'>{ele.name}</td></tr>})}
            </tbody>
        </table>
        <form onSubmit={(e)=>{e.preventDefault(); refId.current!==null && props.getEmail(Number(refId.current.value))}}>
            <input placeholder='Enter student id in range 1-4' type='number' ref={refId}/>
            <button className='btn btn-dark btn-sm ms-2' type='submit'>Get email</button>
        </form>
       {props.student.id>-1? <div className="alert alert-dark my-2" role="alert">
          {props.student.email}
        </div>:''}
    </div>
  )
}

export default Marks