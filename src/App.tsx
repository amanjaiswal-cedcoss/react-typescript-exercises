import React, { useState } from "react";
import "./App.css";
import Marks from "./components/Marks";
import Student from "./components/Student";
import { student } from "./types";

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

function App() {
  const [student, setStudent] = useState<student>({ id: -1, email: "" });

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
  return (
    <div className="App">
      <Student name="Aman Jaiswal" age={22} qualified={true} gender="male" />
      <Marks
        marks={[94, 89, 78, 88, 90]}
        books={books}
        getEmail={getEmail}
        student={student}
      />
    </div>
  );
}

export default App;
