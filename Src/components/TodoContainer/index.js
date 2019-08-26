import React, { Component } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import AddTodo from "../AddTodo/index"
import TodoList from '../TodoList';

import { observer } from 'mobx-react'
import TodoFooter from '../../TodoFooter';
@observer
class TodoContainer extends Component {

    onSubmitTodo = (todoDescription) => {
        console.log("in todoContainer,", todoDescription)
        this.props.todoStore.addTodo(todoDescription)
    }
    render() {
        console.log("in todocontainer todos on call back", this.props.todoStore.todos)
        return (
            <View>
                <AddTodo onSubmitTodo={this.onSubmitTodo} />
                <TodoList todoStore={this.props.todoStore} />
                <TodoFooter />
            </View>



        )
    }
}
export default TodoContainer