import React, { Fragment, useState } from "react";
import "./App.css";
// import Header from "./common/Header";
// import AddNew from "./components/AddNew";
// import TodoList from "./components/TodoList";
import Home from "./pages/Home";
// import { Todos } from "./todo.module";
import { Route, Routes } from "react-router";
const App: React.FC = () => {
  // const [todos, setTodos] = useState<Todos[]>([]);
  // const addnewitemhandler = (text: string) => {
  //   setTodos((pre) => {
  //     return [...pre, { id: Math.random().toString(), text: text }];
  //   });
  // };
  // const onDeleteHandler = (id: string) => {
  //   setTodos(() => {
  //     return todos.filter((el) => {
  //       return el.id !== id;
  //     });
  //   });
 // };
  return (
    <Routes>
      <Route  path="/" element={<Home/>}/>
    </Routes>
  );

  

};

export default App;
  // {/* // <Fragment>
  //   //   <Home/> */}
  //     {/* <div className="container mx-auto px-4">
  //       <div className="columns-lg	columns-md">
  //         <AddNew onAddNewItem={addnewitemhandler} />
  //         <TodoList onDelete={onDeleteHandler} items={todos} />
  //       </div>
  //     </div> */}
  //   //   <Header/>
  //   // </Fragment>