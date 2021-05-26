import actionTypes from "../constants/todoList";

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

function reducer(state = initialState, action) {
  let newState = {};

  switch (action.type) {
    case actionTypes.ADD_TODO:
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

    case actionTypes.TOGGLE_TODO:
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

    case actionTypes.REMOVE_TODO:
      newState = {
        ...state,
        todoList: state.todoList.filter((todo) => {
          return todo.id !== action.id;
        }),
      };

      localStorage.setItem("state", JSON.stringify(newState));

      return newState;

    default:
      return state;
  }
}

export default reducer;
