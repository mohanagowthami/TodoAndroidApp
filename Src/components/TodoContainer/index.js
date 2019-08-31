import React, { Component } from "react";
import { TouchableHighlight, ScrollView } from "react-native";
import { observable } from "mobx";
import { observer } from "mobx-react";

import TodoFooter from "../../TodoFooter";

import AddTodo from "../AddTodo/index";
import TodoList from "../TodoList";
import FetchStatus from "../FetchStatus/index";
import { Text } from "react-native";

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
  componentDidMount() {
    this.props.todoStore.fetchTodos();
  }
  render() {
    const todoList = this.props.todoStore.todoList;
    console.log("in todo container", this.props.todoStore.fetchTodosAPIStatus);
    return (
      <>
        {this.props.todoStore.fetchTodosAPIStatus === 200 ? (
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
                    selectedTodoListType={
                      this.props.todoStore.selectedTodoListType
                    }
                  />
                </TodoFooterContainer>
              </>
            )}
          </>
        ) : (
          <>
            {/* <FetchStatus
              status={this.props.todoStore.fetchTodosAPIStatus}
              error={this.props.todoStore.fetchTodosAPIError}
            /> */}

            {this.props.todoStore.fetchTodosAPIStatus === 100 ? (
              <Text>loading</Text>
            ) : (
              <Text>{this.props.todoStore.fetchTodosAPIError}</Text>
            )}
          </>
        )}
      </>
    );
  }
}
export default TodoContainer;
