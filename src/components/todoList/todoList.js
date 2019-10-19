import React from "react";
import TodoItem from "../todoItem/todoItem";

class TodoList extends React.Component {
  render() {
    const { items } = this.props;
    const { clearList } = this.props;
    const { handleDelete } = this.props;
    const { handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center text-white">Todo List</h3>

        {items.map(item => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}

        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5"
          onClick={clearList}
        >
          Clear List
        </button>
      </ul>
    );
  }
}

export default TodoList;
