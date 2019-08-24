import React, { Component } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import AddTodo from "../AddTodo/index"
class TodoContainer extends Component {
    render() {
        return (
            <View>
                <AddTodo />
            </View>



        )
    }
}
export default TodoContainer