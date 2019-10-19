import React from "react";
import TodoItem from "../todoItem/todoItem";

class TodoList extends React.Component {
  render() {
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Todo List</h3>
        <TodoItem />
        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5"
        >
          Clear List
        </button>
      </ul>
    );
  }
}

export default TodoList;
