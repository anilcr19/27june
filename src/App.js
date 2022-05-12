import './App.css';
import Header from './MyComponents/Header';
import {Footer}  from './MyComponents/Footer';
import  {Todos}  from './MyComponents/Todos';
import React, { useState } from 'react';

function App() {
  const onDelete=(todo)=>{
    console.log("I am onDelete",todo);
    setTodos(todos.filter((e)=>{
       return e!==todo;
    }));
  }
  const [todos, setTodos] = useState([
    {
      sno:1,
      title:"homework",
      desc:"finish your homework by evening"
    },
    {
      sno:2,
      title:"Market",
      desc:"go to market to buy groceries"
    },
    {
      sno:3,
      title:"cooking",
      desc:"prepare dinner for your family"
    }
  ])
  return (
    <>
    <Header title="MyTodosList" searchBar={false}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  
  );
}

export default App;
 