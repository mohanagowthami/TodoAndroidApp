import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  Button,
  TouchableHighlight,
  Image
} from "react-native";
import { observer } from "mobx-react";

import TodoFooter from "../../TodoFooter";

import AddTodo from "../AddTodo/index";
import TodoList from "../TodoList";

import styles from "./style";
import { observable } from "mobx";
import { genericTypeAnnotation } from "@babel/types";

@observer
class TodoContainer extends Component {
  @observable addTodoInputBox = false;
  onSubmitTodo = todoDescription => {
    // console.log("in todoContainer,", todoDescription)
    this.props.todoStore.addTodo(todoDescription);
    this.onImagePlusClick();
  };
  onStateUpdate = label => {
    console.log(label, "label in todoFooter");
    this.props.todoStore.onTodoStateUpdate(label);
  };
  onImagePlusClick = () => {
    this.addTodoInputBox = !this.addTodoInputBox;
  };
  render() {
    // console.log("in todocontainer todos on call back", this.props.todoStore.todos)
    const todoList = this.props.todoStore.todoList;
    console.log("in conatiner", todoList);
    return (
      <>
        {this.addTodoInputBox ? (
          <View style={{ height: 120 }}>
            <AddTodo onSubmitTodo={this.onSubmitTodo} />
          </View>
        ) : (
          <>
            <View style={{ height: 80, backgroundColor: "green" }}>
              <Text style={{ fontSize: 30 }}>Header</Text>
            </View>
            <View
              style={{ flex: 1, marginTop: 10, justifyContent: "flex-start" }}
            >
              <TodoList todoList={todoList} />
            </View>
            <View style={{ position: "absolute", bottom: 90, right: 10 }}>
              <TouchableHighlight onPress={this.onImagePlusClick}>
                <Image
                  source={require("./assets/plus.png")}
                  style={{ width: 70, height: 70, borderRadius: 35 }}
                />
              </TouchableHighlight>
            </View>

            <View style={{ height: 80 }}>
              <TodoFooter
                onStateUpdate={this.onStateUpdate}
                selectedTodoListType={this.props.todoStore.selectedTodoListType}
              />
            </View>
          </>
        )}
      </>
    );
  }
}
export default TodoContainer;
