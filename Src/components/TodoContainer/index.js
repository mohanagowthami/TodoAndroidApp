import React, { Component } from "react";
import { TouchableHighlight, ScrollView } from "react-native";
import { observable } from "mobx";
import { observer } from "mobx-react";

import TodoFooter from "../../TodoFooter";

import AddTodo from "../AddTodo/index";
import TodoList from "../TodoList";

import {
  AddTodoContainer,
  Plus,
  TodoFooterContainer,
  Header,
  HeaderText,
  TodoListContainer,
  ImagePlus
} from "./style";

@observer
class TodoContainer extends Component {
  @observable addTodoInputBox = false;
  onSubmitTodo = todoDescription => {
    this.props.todoStore.addTodo(todoDescription);
    this.onImagePlusClick();
  };
  onStateUpdate = label => {
    this.props.todoStore.onTodoStateUpdate(label);
  };
  onImagePlusClick = () => {
    this.addTodoInputBox = !this.addTodoInputBox;
  };
  render() {
    const todoList = this.props.todoStore.todoList;
    return (
      <>
        {this.addTodoInputBox ? (
          <AddTodoContainer>
            <AddTodo onSubmitTodo={this.onSubmitTodo} />
          </AddTodoContainer>
        ) : (
          <>
            <Header>
              <HeaderText>Header</HeaderText>
            </Header>

            <TodoListContainer>
              <ScrollView>
                <TodoList todoList={todoList} />
              </ScrollView>
            </TodoListContainer>

            <Plus>
              <TouchableHighlight onPress={this.onImagePlusClick}>
                <ImagePlus source={require("./assets/plus.png")} />
              </TouchableHighlight>
            </Plus>

            <TodoFooterContainer>
              <TodoFooter
                onStateUpdate={this.onStateUpdate}
                selectedTodoListType={this.props.todoStore.selectedTodoListType}
              />
            </TodoFooterContainer>
          </>
        )}
      </>
    );
  }
}
export default TodoContainer;
