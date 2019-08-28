import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  Button,
  Image,
  TouchableHighlight,
  CheckBox
} from "react-native";
//import CheckBox from "@react-native-community/checkbox";
// import { CheckBox } from "react-native-elements";
//import CheckBox from "react-native-check-box";
import { observer } from "mobx-react";
import { observable } from "mobx";

import styles from "./style";
@observer
class TodoListItem extends Component {
  @observable todo = this.props.todo.todoDescription;
  @observable isInputBox = false;
  // @observable isActive = this.props.todo.isActive;
  updateIsCompleted = () => {
    console.log("this is gowthami");
    this.props.todo.isActiveUpdate();
    //this.isActive = this.props.todo.isActive;
    console.log(" this in todolist item", this.props.todo.isActive);
  };
  handleKeyDown = e => {
    if (e.nativeEvent.key == "Enter") {
      this.props.todo.descriptionUpdate(this.todo);
      this.handleInputBox();
    }
    this.handleInputBox();
  };
  handleChange = text => {
    this.todo = text;
  };

  renderInputBox = () => {
    return (
      <View>
        <TextInput
          style={{ height: 70, fontSize: 20 }}
          onChangeText={this.handleChange}
          value={this.todo}
          onSubmitEditing={this.handleKeyDown}
        />
      </View>
    );
  };
  handleInputBox = () => {
    this.isInputBox = !this.isInputBox;
  };
  renderText = () => {
    return (
      <View>
        {this.props.todo.isActive ? (
          <Text style={{ fontSize: 20 }} onPress={this.handleInputBox}>
            {this.todo}
          </Text>
        ) : (
          <Text
            style={{ textDecorationLine: "line-through", fontSize: 20 }}
            onPress={this.handleInputBox}
          >
            {this.todo}
          </Text>
        )}
      </View>
    );
  };
  onImageClick = () => {
    this.props.todo.onRemoveTodo();
  };

  renderDisplay = () => {
    console.log("todo desc in todo list item", this.props.todo.todoDescription);
    return (
      <View style={styles.container}>
        <View style={{ width: "20%" }}>
          <CheckBox
            value={!this.props.todo.isActive}
            onValueChange={this.updateIsCompleted}
          ></CheckBox>
        </View>
        <View style={{ flex: 1 }}>
          {this.isInputBox ? this.renderInputBox() : this.renderText()}
        </View>
        <View style={{ width: "10%" }}>
          <TouchableHighlight onPress={this.onImageClick}>
            <Image
              source={{
                uri: "https://image.flaticon.com/icons/png/512/60/60761.png"
              }}
              style={{ width: 25, height: 25 }}
            />
          </TouchableHighlight>
        </View>
      </View>
    );
  };
  render() {
    return <>{this.renderDisplay()}</>;
  }
}
export default TodoListItem;
