import React from "react";
import TodoData from "../todo.json";
import { TodoList } from "./components/TodoList";
import { Filter } from "./components/Filter";

export class App extends React.Component {
  state = {
    todos: TodoData,
    filter: "",
  };

  render() {
    return (
      <>
        <Filter />
        <TodoList TodoData={TodoData} />
      </>
    );
  }
}
