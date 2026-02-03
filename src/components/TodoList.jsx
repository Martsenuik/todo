export const TodoList = ({ TodoData }) => {
  return (
    <ul>
      <li>
        {TodoData.map((item) => {
          return (
            <>
              <label>
                <input type="checkbox" />
                <p key={item.id}>{item.text}</p>
                <button>delate</button> <br />
              </label>
            </>
          );
        })}
      </li>
    </ul>
  );
};
