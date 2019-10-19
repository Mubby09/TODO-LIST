import React from "react";

class TodoInput extends React.Component {
  render() {
    //The way props is passed in class based component is quite different. If
    //I were to use a Functional Component, the way tp passed the methods(handleSubmit, handlechange and item)
    //will be passed by (props.handleChange, props.handleSubmit and props.item)
    const { item, handleChange, handleSubmit } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add a todo item"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-block btn-primary mt-3">
            Add Item
          </button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
