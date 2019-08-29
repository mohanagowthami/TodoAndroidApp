import React, { Component } from "react";
import { Button, Alert } from "react-native";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { AddTodoView, TodoTextInput } from "./style";

@observer
class AddTodo extends Component {
  @observable todo = "";
  submit = () => {
    if (this.todo.trim() !== "") {
      this.props.onSubmitTodo(this.todo);
      this.todo = "";
    } else {
      Alert.alert("enter todo", "please, make sure not to entry empty todo", [
        { text: "OK", onPress: () => console.log("ok") }
      ]);
    }
  };
  handleChange = text => {
    this.todo = text;
  };
  render() {
    return (
      <AddTodoView>
        <TodoTextInput
          placeholder="enter todo"
          onChangeText={this.handleChange}
          value={this.todo}
        />
        <Button onPress={this.submit} title="submit" />
      </AddTodoView>
    );
  }
}
export default AddTodo;
