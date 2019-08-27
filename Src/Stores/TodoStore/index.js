import { observable, action, computed } from "mobx";
import TodoModel from "../Model/index"
import { all, active, completed } from "../index"


class TodoStore {
    @observable todos = [];
    @observable selectedTodoListType = all
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


    @action onTodoStateUpdate = value => {
        this.selectedTodoListType = value;
    };


    @computed get todoList() {
        var array = [];
        if (this.selectedTodoListType === completed) {
            array = this.todos.filter(function (obj) {
                return obj.isActive === false;
            });
        } else if (this.selectedTodoListType === active) {
            array = this.todos.filter(function (obj) {
                return obj.isActive === true;
            });
        } else {
            array = this.todos;
        }
        this.selectedTodoListLength = array.length;
        return array;
    };



}
export default TodoStore;