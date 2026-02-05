import React from "react";

export class TodoEditor extends React.Component {
  state = {
    textValue: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const value = event.currentTarget.elements.create.value;
    this.props.addToDo(value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          створи ще одне завдання
          <textarea name="create" id="" cols="30"></textarea>
          <button type="submit">створити</button>
        </label>
        <br />
      </form>
    );
  }
}
