import React from "react";
import { TodoList } from "./components/TodoList";
import { Filter } from "./components/Filter";
import { TodoEditor } from "./components/TodoEditor ";

export class App extends React.Component {
  state = {
    todos: [
      { id: "id-1", text: "Вивчити основи React", completed: true },
      { id: "id-2", text: "Розібратися з React Router", completed: false },
      { id: "id-3", text: "Пережити Redux", completed: false },
    ],
    filter: "",
  };

  addToDo = (message) => {
    const newTodo = { id: Date.now(), text: message };
    this.setState((prevState) => {
      return {
        todos: [...prevState.todos, newTodo],
      };
    });
  };

  DeleteToDo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  render() {
    return (
      <>
        <TodoEditor addToDo={this.addToDo} />
        <Filter />
        <TodoList TodoData={this.state.todos} DeleteToDo={this.DeleteToDo} />
      </>
    );
  }
}
