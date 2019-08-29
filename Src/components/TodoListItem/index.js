import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  CheckBox,
  Alert
} from "react-native";
import { observer } from "mobx-react";
import { observable } from "mobx";

import {
  TodoListItemView,
  CheckBoxView,
  InputBoxView,
  FooterImage,
  BinView,
  Input,
  NormalText,
  StrikeText
} from "./style";
@observer
class TodoListItem extends Component {
  @observable todo = this.props.todo.todoDescription;
  @observable isInputBox = false;

  updateIsCompleted = () => {
    this.props.todo.isActiveUpdate();
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
      <>
        <Input
          onChangeText={this.handleChange}
          value={this.todo}
          onSubmitEditing={this.handleKeyDown}
        />
      </>
    );
  };
  handleInputBox = () => {
    this.isInputBox = !this.isInputBox;
  };
  renderText = () => {
    return (
      <View>
        {this.props.todo.isActive ? (
          <NormalText onPress={this.handleInputBox}>{this.todo}</NormalText>
        ) : (
          <StrikeText onPress={this.handleInputBox}>{this.todo}</StrikeText>
        )}
      </View>
    );
  };
  onImageClick = () => {
    this.props.todo.onRemoveTodo();
  };

  showAlert = () => {
    Alert.alert("Delete Todo Item", "Are you sure, to delete todo item", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => this.onImageClick() }
    ]);
  };

  renderDisplay = () => {
    return (
      <TodoListItemView>
        <CheckBoxView>
          <CheckBox
            value={!this.props.todo.isActive}
            onValueChange={this.updateIsCompleted}
          ></CheckBox>
        </CheckBoxView>
        <InputBoxView>
          {this.isInputBox ? this.renderInputBox() : this.renderText()}
        </InputBoxView>
        <BinView>
          <TouchableOpacity onPress={this.showAlert}>
            <FooterImage
              source={{
                uri: "https://image.flaticon.com/icons/png/512/60/60761.png"
              }}
            />
          </TouchableOpacity>
        </BinView>
      </TodoListItemView>
    );
  };
  render() {
    return <>{this.renderDisplay()}</>;
  }
}

export default TodoListItem;
