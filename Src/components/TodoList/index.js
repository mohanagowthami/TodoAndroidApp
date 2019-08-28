import React, { Component } from "react";
import { View, Text } from "react-native";
import { observer } from "mobx-react";

import TodoListItem from "../TodoListItem/index.js";

import styles from "./style";

@observer
class TodoList extends Component {
  renderDisplay = () => {
    return this.props.todoList.map(object => {
      console.log(" in todo list", object.todoDescription);
      return <TodoListItem key={object.id} todo={object} />;
    });
  };

  render() {
    return <>{this.renderDisplay()}</>;
  }
}
export default TodoList;
