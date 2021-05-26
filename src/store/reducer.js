import actionTypes from "../constants/todoList";

function getMaxId(todoList) {
  return todoList.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId);
  }, -1);
}

const initialState = {
  todoList: [
    { id: 1, todo: "Plant a house", isDone: false },
    { id: 2, todo: "Build a tree", isDone: true },
  ],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
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

    case actionTypes.TOGGLE_TODO:
      return {
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

    case actionTypes.REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => {
          return todo.id !== action.id;
        }),
      };

    default:
      return state;
  }
}

export default reducer;
