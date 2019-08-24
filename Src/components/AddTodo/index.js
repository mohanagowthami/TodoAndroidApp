import React, { Component } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { observer } from "mobx-react"
import { observable } from "mobx"


@observer
class AddTodo extends Component {
    @observable todo
    submit = () => {
        console.log("todo", this.todo)
        // this.props.onSubmitTodo(this.todo)
    }
    handleChange = (e) => {
        this.todo = e.target.value;
    }
    render() {
        return (
            <View style={{ padding: 10 }}>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="enter todo"
                    onChangeText={this.handleChange}

                />
                <Button onPress={this.submit}
                    title="submit" />
            </View>

        )
    }
}
export default AddTodo