export const TodoList = ({ TodoData }) => {
  return (
    <ul>
      {TodoData.map((item) => {
        return (
          <>
            <li>
              <label>
                <input type="checkbox" />
                <p key={item.id}>{item.text}</p>
                <button>delate</button> <br />
              </label>
            </li>
          </>
        );
      })}
    </ul>
  );
};
