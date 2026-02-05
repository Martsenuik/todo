import React from "react";
import TodoData from "../todo.json";
import { TodoList } from "./components/TodoList";
import { Filter } from "./components/Filter";
import { TodoEditor } from "./components/TodoEditor ";

export class App extends React.Component {
  state = {
    todos: TodoData,
    filter: "",
  };

  render() {
    return (
      <>
        <TodoEditor />
        <Filter />
        <TodoList TodoData={TodoData} />
      </>
    );
  }
}
