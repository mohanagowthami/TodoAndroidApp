import React, { Component } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import AddTodo from "../AddTodo/index"
import TodoList from '../TodoList';

import { observer } from 'mobx-react'
import TodoFooter from '../../TodoFooter';

@observer
class TodoContainer extends Component {

    onSubmitTodo = (todoDescription) => {
        // console.log("in todoContainer,", todoDescription)
        this.props.todoStore.addTodo(todoDescription)
    }
    onStateUpdate = (label) => {
        console.log(label, "label in todoFooter")
        this.props.todoStore.onTodoStateUpdate(label);
    }
    render() {
        // console.log("in todocontainer todos on call back", this.props.todoStore.todos)
        const todoList = this.props.todoStore.todoList;
        console.log("in conatiner", todoList)
        return (
            <View>
                <AddTodo onSubmitTodo={this.onSubmitTodo} />
                <TodoList todoList={todoList} />
                <TodoFooter onStateUpdate={this.onStateUpdate} selectedTodoListType={this.props.todoStore.selectedTodoListType} />
            </View>



        )
    }
}
export default TodoContainer