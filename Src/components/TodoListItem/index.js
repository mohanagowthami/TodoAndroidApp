import React, { Component } from 'react';
import { Text, TextInput, View, Button, Image, TouchableHighlight } from 'react-native';
import { CheckBox } from 'native-base';
import { observer } from "mobx-react"
import { observable } from "mobx"
@observer
class TodoListItem extends Component {
    @observable todo = this.props.todo.todoDescription;
    @observable isInputBox = false;
    @observable isActive = this.props.todo.isActive;
    updateIsCompleted = () => {
        this.isActive = !this.isActive
        console.log(" this in todolist item", this.isActive);
        this.props.todo.isActiveUpdate()
    }
    handleKeyDown = (e) => {
        if (e.nativeEvent.key == "Enter") {
            this.props.todo.descriptionUpdate(this.todo);
            this.handleInputBox();

        }
        this.handleInputBox();
    }
    handleChange = (text) => {
        this.todo = text;
    }

    renderInputBox = () => {
        return <View>
            <TextInput
                style={{ height: 70 }}

                onChangeText={this.handleChange}
                value={this.todo}
                onSubmitEditing={this.handleKeyDown} />

        </View>
    }
    handleInputBox = () => {
        this.isInputBox = !this.isInputBox;
    }
    renderText = () => {
        return <View>
            {!this.isActive ? <Text style={{ textDecorationLine: 'line-through' }} onPress={this.handleInputBox}>{this.todo}</Text> : <Text onPress={this.handleInputBox} >{this.todo}</Text>}
        </View>
    }
    onImageClick = () => {
        this.props.todo.onRemoveTodo();
    }

    renderDisplay = () => {
        console.log("todo desc in todo list item", this.props.todo.todoDescription)
        return <View>
            <CheckBox checked={this.isActive} onPress={this.updateIsCompleted} ></CheckBox>
            {this.isInputBox ? this.renderInputBox() : this.renderText()}
            <TouchableHighlight onPress={this.onImageClick}>
                <Image style={{ width: 25, height: 25 }} source={{ uri: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F512%2F60%2F60761.png&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-icon%2Frubbish-bin-delete-button_779568.htm&docid=-G3TOX4REnhGPM&tbnid=FI7tiHVYKsOnnM%3A&vet=10ahUKEwieyPbT3KDkAhX48XMBHd7uAqQQMwhBKAMwAw..i&w=512&h=512&bih=981&biw=1853&q=delete%20button%20image%20bin&ved=0ahUKEwieyPbT3KDkAhX48XMBHd7uAqQQMwhBKAMwAw&iact=mrc&uact=8' }} />
            </TouchableHighlight>


        </View >

    }
    render() {
        return (
            <View>
                {this.renderDisplay()}
            </View>
        )
    }
}
export default TodoListItem