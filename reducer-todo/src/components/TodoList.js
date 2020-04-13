import React, { useReducer } from "react";

export default function TodoList(props) {
  const markTodo = (id, completed) => (event) =>
    props.dispatch({
      type: "MARK_TODO",
      payload: { id, completed },
    });

  console.log(props.state.todoList);

  return (
    <table className="todo-list">
      {props.state.todoList.map((todo) => (
        <tr
          key={todo.id}
          style={{
            color: !todo.completed ? "red" : "green",
            textDecorationLine: todo.completed ? "line-through" : "",
          }}
        >
          <td> {todo.name}</td>
          <td>
            <button onClick={markTodo(todo.id, true)}>complete</button>
            <button onClick={markTodo(todo.id, false)}>incomplete</button>
          </td>
        </tr>
      ))}
    </table>
  );
}
