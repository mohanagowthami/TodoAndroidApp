import React, { Component } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { observer } from "mobx-react"
import { observable } from "mobx"


@observer
class AddTodo extends Component {
    @observable todo

    submit = () => {
        console.log("todo are gow", this.todo)
        this.props.onSubmitTodo(this.todo)
        this.todo = "";
    }
    handleChange = (text) => {
        this.todo = text;
        console.log("todo", this.todo)
    }
    render() {
        return (
            <View style={{ padding: 10 }}>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="enter todo"
                    onChangeText={this.handleChange}
                    value={this.todo}

                />
                <Button onPress={this.submit}
                    title="submit" />
            </View>

        )
    }
}
export default AddTodo