import React from "react";

export class TodoEditor extends React.Component {
  state = {
    textValue: "",
  };

  render() {
    return (
      <>
        <label>
          створи ще одне завдання
          <textarea></textarea>
          <button>створити</button>
        </label>
      </>
    );
  }
}
