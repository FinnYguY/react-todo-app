import React from "react";
// import { useStore } from "react-redux"; //////////////////////////////

import Context from "./context";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";

import actions from "./constants/todoList";

function App() {
  const [todoList, setTodoList] = React.useState([
    { id: 1, todo: "Plant a house", isDone: false },
    { id: 2, todo: "Build a tree", isDone: true },
  ]);
  // const store = useStore(); /////////////////////////////////
  // console.log(store.getState()); ////////////////////////////////
  // store.dispatch({ type: actions.ADD_TODO, todo: "Get a cracker" });
  // console.log(store.getState()); ////////////////////////////////

  function addTodo(todo) {
    setTodoList(
      todoList.concat([
        {
          id: Date.now(),
          todo,
          isDone: false,
        },
      ])
    );
  }

  function toggleTodo(id) {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <p className="header">
          TodoList using{" "}
          <a className="link code" href="https://reactjs.org/">
            React
          </a>
        </p>
        <AddTodo onCreate={addTodo} />
        {todoList.length ? (
          <TodoList todoList={todoList} onToggle={toggleTodo} />
        ) : (
          <p>No todos found. Feel free to chill or add some :)</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
