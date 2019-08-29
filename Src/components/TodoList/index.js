import React, { Component } from "react";
import { FlatList, View } from "react-native";
import { observer } from "mobx-react";

import TodoListItem from "../TodoListItem/index.js";

@observer
class TodoList extends Component {
  renderDisplay = () => {
    return (
      <View>
        <FlatList
          data={this.props.todoList}
          horizontal={false}
          renderItem={({ item }) => <TodoListItem key={item.id} todo={item} />}
        />
      </View>
    );
  };

  // return this.props.todoList.map(object => {
  //   return <TodoListItem key={object.id} todo={object} />;
  // });

  render() {
    return <>{this.renderDisplay()}</>;
  }
}
export default TodoList;
