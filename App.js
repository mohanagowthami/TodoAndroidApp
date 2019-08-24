import React, { Component } from 'react';
import TodoContainer from "./Src/components/TodoContainer/index"
import { Text, TextInput, View, Button } from 'react-native';
class App extends Component {
    render() {
        return (
            <View>
                <TodoContainer />
                <Text>"this is todo app"</Text>
                {/* <TextInput
                    style={{ height: 40 }}
                    placeholder="enter todo"
                    onChangeText={this.handleChange}

                /> */}
            </View>
        )
    }
}
export default App