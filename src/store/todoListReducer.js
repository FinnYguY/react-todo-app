import todoActionTypes from "../constants/todoList";

function getMaxId(todoList) {
  return todoList.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId);
  }, -1);
}

function getInitialState() {
  let state = localStorage.getItem("state");

  if (state) {
    return JSON.parse(state);
  }

  state = {
    todoList: [
      { id: 1, todo: "Plant a house", isDone: false },
      { id: 2, todo: "Build a tree", isDone: true },
    ],
  };

  localStorage.setItem("state", JSON.stringify(state));
  return state;
}

const initialState = getInitialState();

function todoListReducer(state = initialState, action) {
  let newState = {};

  switch (action.type) {
    case todoActionTypes.ADD_TODO:
      newState = {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: getMaxId(state.todoList) + 1,
            todo: action.todo,
            isDone: false,
          },
        ],
      };

      localStorage.setItem("state", JSON.stringify(newState));

      return newState;

    case todoActionTypes.TOGGLE_TODO:
      newState = {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.id) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          }
          return todo;
        }),
      };

      localStorage.setItem("state", JSON.stringify(newState));

      return newState;

    case todoActionTypes.EDIT_TODO:
      newState = {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.id) {
            return {
              ...todo,
              todo: action.todo,
            };
          }
          return todo;
        }),
      };

      localStorage.setItem("state", JSON.stringify(newState));

      return newState;

    case todoActionTypes.REMOVE_TODO:
      newState = {
        ...state,
        todoList: state.todoList.filter((todo) => {
          return todo.id !== action.id;
        }),
      };

      localStorage.setItem("state", JSON.stringify(newState));

      return newState;

    case todoActionTypes.TODOS_REQUEST:
      console.log("Requesting to do list...");
      return state;

    case todoActionTypes.TODOS_SUCCESS:
      console.log("Request successful:");
      console.log(action.todos);
      return state;

    case todoActionTypes.TODOS_FAILURE:
      console.log("Request failed due to:");
      console.log(action.e.name + ": " + action.e.message);
      return state;

    default:
      return state;
  }
}

export default todoListReducer;
