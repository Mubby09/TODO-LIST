import React from "react";
import TodoInput from "./components/todoInput/todoInput";
import TodoList from "./components/todoList/todoList";

import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      id: uuid(),
      item: "",
      editItem: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      item: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const newItem = {
      id: this.state.id,
      item: this.state.item
    };

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
            />
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
