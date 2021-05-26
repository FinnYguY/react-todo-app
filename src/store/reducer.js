import actions from "../constants/todoList";

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
    case actions.ADD_TODO:
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
    default:
      return state;
  }
}

export default reducer;
