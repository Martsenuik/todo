import React from "react";

export class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.TodoData.map((item) => (
          <li key={item.id}>
            <label>
              <input type="checkbox" />
              <p>{item.text}</p>
              <button
                type="button"
                onClick={() => this.props.DeleteToDo(item.id)}
              >
                delete
              </button>
              <br />
            </label>
          </li>
        ))}
      </ul>
    );
  }
}
