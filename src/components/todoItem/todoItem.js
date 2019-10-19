import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>Title</h6>

        <div>
          <span className="mx-2 text-success">
            <i className="fas fa-pen" />
          </span>
          <span className="mx-2 text-danger">
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}

export default TodoItem;
