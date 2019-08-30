import React, { Component } from "react";
import { observer } from "mobx-react";

import TodoListItem from "../TodoListItem/index.js";

@observer
class TodoList extends Component {
  renderDisplay = () => {
    return this.props.todoList.map(object => {
      return <TodoListItem key={object.id} todo={object} />;
    });
  };

  render() {
    return <>{this.renderDisplay()}</>;
  }
}
export default TodoList;
