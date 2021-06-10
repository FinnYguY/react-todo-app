import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { getTodosRequest } from "./store/actions";

import Modal from "./components/Modal/";
import AddTodo from "./components/AddTodo/";
import TodoList from "./components/TodoList/";
import FilterList from "./components/FilterList/";

export default function App() {
  const todoList = useSelector((state) => state.todoList.todoList);
  const dispatch = useDispatch();

  return (
    <Router>
      <div className="wrapper">
        <Switch>
          <Route path="/info">
            <Modal>
              <h1 className="modal__header">Hi there!</h1> <br />
              <p className="modal__text">
                Here I give ya some free space to organize ur affairs <br />
                <br /> Just add new 'todos' and check / remove when u're done
                with 'em <br />
                <br /> Web site stores all ur data locally on a device, so u may
                close the tab and be sure that those 'todos' still exist : )
              </p>
            </Modal>
          </Route>

          <Route path="/">
            <p className="header">
              TodoList using{" "}
              <a className="link code" href="https://reactjs.org/">
                React
              </a>
            </p>
            <div className="content">
              <AddTodo />
              {todoList.length ? (
                <div>
                  <TodoList />
                  <FilterList />
                </div>
              ) : (
                <p>No todos found. Feel free to chill or add some :)</p>
              )}
            </div>
            <div className="footer">
              <Link to="/info">
                <button className="default-button">Show info</button>
              </Link>
              <button
                className="default-button"
                onClick={() => dispatch(getTodosRequest())}
              >
                Extract todos to console
              </button>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
