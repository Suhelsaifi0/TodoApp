import "./App.css";
import Header from "./MyComponent/Header";
import { Todos } from "./MyComponent/Todos";
import Footer from "./MyComponent/Footer";
import { useState, useEffect } from "react";
import { AddTodo } from "./MyComponent/AddTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am onDelete", todo);

    // Deleting in this way does not work in React
    //  let index = todo.indexOf(todo);
    //  todos.splice();
    setTodos(
      todos.filter((e) => {
        return e != todo;
      })
    );
    toast.info("Todo deleted!");
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this Todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTod = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTod]);
    console.log(myTod);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <Header title="MY TODO LIST" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
