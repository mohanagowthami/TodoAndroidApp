import React, { Component } from 'react';
import { Text, TextInput, View, Button } from 'react-native';

import TodoContainer from "./Src/components/TodoContainer/index"
import { todoStore } from "./Src/Stores/index"
import { observer } from "mobx-react"

@observer
class App extends Component {
    render() {
        console.log("  app todostore", todoStore.todos)
        return (
            <View>
                <TodoContainer todoStore={todoStore} />

            </View>
        )
    }
}
export default App