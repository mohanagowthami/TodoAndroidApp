
import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { observer } from "mobx-react"

import TodoListItem from "../TodoListItem/index.js"

@observer
class TodoList extends Component {
    renderDisplay = () => {
        return this.props.todoStore.todos.map((object) => {
            console.log(" in todo list", object.todoDescription)
            return <TodoListItem key={object.id} todo={object}
            />

        })


    }

    render() {
        return (
            <View>
                {this.renderDisplay()}
            </View>

        )
    }

}
export default TodoList