import { observable, action, computed } from "mobx";
import TodoModel from "../Model/index";
import { all, active, completed } from "../index";
// import { NetInfo } from "react-native";
// import * as NetInfo from "@react-native-community/netinfo";
// import NetInfo from "@react-native-community/netinfo/lib/commonjs";
class TodoStore {
  @observable todos = [];
  @observable selectedTodoListType = all;
  count = 0;
  @observable fetchTodosAPIError = "";
  @observable fetchTodosAPIStatus = 0;

  @action addTodo(description) {
    console.log(" gow description", description);
    const todo = {
      id: this.count++,
      description: description,
      completed: false
    };
    this.todos.push(new TodoModel(todo, this));
    this.todos.forEach(object => {
      console.log("todo list", object.description);
    });
  }

  @action onTodoStateUpdate = value => {
    console.log(value, "in store");
    this.selectedTodoListType = value;
  };

  @computed get todoList() {
    var array = [];
    if (this.selectedTodoListType === completed) {
      array = this.todos.filter(function(obj) {
        return obj.completed === true;
      });
    } else if (this.selectedTodoListType === active) {
      array = this.todos.filter(function(obj) {
        return obj.completed === false;
      });
    } else {
      array = this.todos;
    }
    this.selectedTodoListLength = array.length;
    console.log("in store list", array);
    return array;
  }
  // @action.bound
  // async fetchTodos() {
  //   try {
  //     console.log("this is in fetch todos");
  //     this.fetchTodosAPIStatus = 100;
  //     let response = await fetch("​https://api.myjson.com/bins/nhomr");

  //     this.todos = await response.json();
  //     console.log(" this.todos", this.todos);
  //     this.fetchTodosAPIStatus = 200;
  //   } catch (error) {
  //     console.log("error is", error);
  //     this.fetchTodosAPIStatus = 400;
  //     this.fetchTodosAPIError = error;

  //     // NetInfo.isConnected.fetch().then(isConnected => {
  //     //   if (isConnected) {
  //     //     this.fetchTodosAPIError = "something went wrong";
  //     //   } else {
  //     //     this.fetchTodosAPIError = "check your connection";
  //     //   }
  //     // });
  //   }
  // }

  fetchTodos() {
    fetch("​https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        return responseJson;
      })

      .catch(error => {
        console.log("errore", error);
      });
  }
}

export default TodoStore;
