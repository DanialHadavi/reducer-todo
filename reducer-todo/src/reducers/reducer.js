const todoList = [
  { id: 1, name: "Learning about reducers", completed: false },
  { id: 2, name: "Styling my app", completed: false },
  { id: 3, name: "Watching tutorials on YouTube", completed: false },
];

export const initialState = {
  todoList,
  todoValue: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "MARK_TODO":
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, completed: action.payload.completed };
          }
          return todo;
        }),
      };
    case "INPUT_CHANGE":
      console.log(state.todoValue);
      return {
        ...state,
        todoValue: action.payload,
      };
    case "SUBMIT":
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: action.payload.newId,
            name: action.payload.task,
            completed: false,
          },
        ],
      };
    case "RESET":
      return { ...state, todoValue: "" };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        todoList: [...state.todoList].filter((task) => {
          return task.completed === false;
        }),
      };

    default:
      return state;
  }
};
