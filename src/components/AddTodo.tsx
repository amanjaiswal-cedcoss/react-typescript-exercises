import React, { useRef } from "react";
import { AddTodoProps } from "../types";

function AddTodo(props: AddTodoProps) {
    const refTodo=useRef<HTMLInputElement>(null)
  return (
    <>
      <form className="d-flex align-items-center" onSubmit={(e)=>{e.preventDefault();refTodo.current!==null&& props.addTodo(refTodo.current.value)}}>
        <input ref={refTodo}  required type='text' placeholder="Enter task"/>
        <button className="btn btn-primary btn-sm ms-2" type="submit">Add Todo</button>
      </form>
    </>
  );
}

export default AddTodo;
