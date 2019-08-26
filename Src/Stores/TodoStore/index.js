import { observable, action } from "mobx";
import TodoModel from "../Model/index"


class TodoStore {
    @observable todos = [];
    count = 0;

    @action addTodo(todoDescription) {
        console.log(" gow Tododescription", todoDescription)
        const todo = {
            id: this.count++,
            todoDescription: todoDescription,
            isActive: true
        };
        this.todos.push(new TodoModel(todo, this));
        this.todos.forEach((object) => {
            console.log("todo list", object.todoDescription);
        })
    }
}
export default TodoStore;