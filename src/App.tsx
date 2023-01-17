import React, { useCallback, useReducer, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Counter from "./components/Counter";
import Marks from "./components/Marks";
import Student from "./components/Student";
import { action, state, student, todo } from "./types";

const books = [
  { id: 1, name: "Macbeth" },
  { id: 2, name: "The Tempest" },
  { id: 3, name: "Harry Porter" },
  { id: 4, name: "Goosebumps" },
];

const students = [
  { id: 1, email: "aman@gmail.com" },
  { id: 2, email: "adarsh@gmail.com" },
  { id: 3, email: "deepanshu@gmail.com" },
  { id: 4, email: "ritik@gmail.com" },
];

const initialState = {
  counter: 0,
};
const reducer = (state: state, action: action) => {
  switch (action.type) {
    case "INCREASE":
      return { counter: state.counter + 1 };
    default:
      return state;
  }
};

function App() {
  const [student, setStudent] = useState<student>({ id: -1, email: "" });
  const [counter, dispatch] = useReducer(reducer, initialState);
  const [todos, setTodos] = useState<todo[]>([]);

  const getEmail = (id: number) => {
    let temp = students.find((ele) => {
      return ele.id === id;
    });
    if (temp !== undefined) {
      setStudent(temp);
    } else if (student.id !== -1) {
      setStudent({ id: -1, email: "" });
      alert("No student available with given id");
    } else {
      alert("No student available with given id");
    }
  };

  const count:()=>number = useCallback(() => {
    return counter.counter;
  }, [counter]);

  const addTodo = (title: string) => {
    todos.push({ id: todos.length + 1, title, done: false });
    setTodos([...todos]);
  };

  return (
    <div className="App">
      <Student name="Aman Jaiswal" age={22} qualified={true} gender="male" />
      <Marks
        marks={[94, 89, 78, 88, 90]}
        books={books}
        getEmail={getEmail}
        student={student}
      />
      <div className="border border-dark m-2 card p-4 d-inline-block">
        <h4>Todo Component</h4>
        {todos.map((ele) => {
          return (
            <div key={ele.id} className="card">
              {ele.title}
            </div>
          );
        })}
        <AddTodo addTodo={addTodo} />
      </div>
      <Counter
        counter={count}
        increaseCount={() => {
          dispatch({ type: "INCREASE" });
        }}
      />
    </div>
  );
}

export default App;
