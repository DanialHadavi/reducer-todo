import React, { useReducer } from "react";
import "./index.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { initialState, reducer } from "./reducers/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="container">
      <TodoForm state={state} dispatch={dispatch} />

      <TodoList state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
