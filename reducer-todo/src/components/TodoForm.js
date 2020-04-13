import React, { useReducer } from "react";

export default function Form(props) {
  const onValueChange = (e) => {
    props.dispatch({
      type: "INPUT_CHANGE",
      payload: e.target.value,
    });
  };
  const onFormSubmit = (event) => {
    console.log(props.state.todoList);
    event.preventDefault();
    props.dispatch({
      type: "SUBMIT",
      payload: {
        newId: props.state.todoList.length + 1,
        task: props.state.todoValue,
      },
    });
    props.dispatch({ type: "RESET" });
  };

  const clearCompleted = (event) => {
    event.stopPropagation();
    props.dispatch({
      type: "CLEAR_COMPLETED",
    });
  };

  return (
    <div className="form-top">
      <div className="my-form">
        <form onSubmit={onFormSubmit}>
          <label>Task: </label>
          <input
            type="text"
            name="name"
            value={props.state.todoValue}
            onChange={onValueChange}
          />

          <button type="submit">submit</button>
        </form>
      </div>

      <div className="my-btn">
        <button onClick={(event) => clearCompleted(event)}>
          Clear completed
        </button>
      </div>
    </div>
  );
}
