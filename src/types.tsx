export interface StudentProps {
  name: string;
  age: number;
  qualified: boolean;
  gender: "male" | "female";
}

export interface book {
  id: number;
  name: string;
}

export interface student {
  id: number;
  email: string;
}

export interface MarksProps {
  marks: number[];
  books: book[];
  getEmail: (id: number) => void;
  student: student;
}

export interface todo {
  id:number
  title: string;
  done: false;
}

export interface AddTodoProps {
  addTodo: (title:string)=>void
}

export interface state{
    counter:number
}

export interface action {
  type: "INCREASE";
  payload?: number;
}

export interface CounterProps{
    counter:()=>number
    increaseCount:()=>void
} 
