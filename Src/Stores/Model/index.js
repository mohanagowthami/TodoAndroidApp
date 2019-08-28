import { observable, action } from "mobx";

class TodoModel {
  id;
  @observable todoDescription;
  @observable isActive;
  todoStore;
  constructor(todoObject, todoStore) {
    this.id = todoObject.id;
    this.todoDescription = todoObject.todoDescription;
    this.isActive = todoObject.isActive;
    this.todoStore = todoStore;
  }
  @action descriptionUpdate(description) {
    this.todoDescription = description;
  }
  @action isActiveUpdate() {
    this.isActive = !this.isActive;
    console.log(" is active update ", this.isActive);
  }
  @action onRemoveTodo() {
    this.todoStore.todos.remove(this);
  }
}
export default TodoModel;
