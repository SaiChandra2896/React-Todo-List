const TodoList = (props) => {
  const deleteTodo = (todo) => {
    const filteredTodos = props.todos.filter((t) => t !== todo);
    props.setTodos(filteredTodos);
  };

  return (
    <div>
      <ul>
        {props.todos.map((todo, i) => (
          <li onClick={() => deleteTodo(todo)} key={i}>
            {todo}
          </li>
        ))}
        {/* <li>Todo 1</li>
        <li>Todo 2</li>
        <li>Todo 3</li>
        <li>Todo 4</li>
        <li>Todo 5</li> */}
      </ul>
    </div>
  );
};

export default TodoList;
