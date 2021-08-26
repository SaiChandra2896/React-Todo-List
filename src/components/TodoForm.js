import { useState } from "react";

const TodoForm = (props) => {
  const [todo, setTodo] = useState("");

  const onEnterTodo = (e) => {
    setTodo(e.target.value);
  };

  const onTodoSubmit = (e) => {
    e.preventDefault();
    if (todo.length === 0 || todo === null || todo === undefined) return;
    props.setTodos((oldstate) => [...oldstate, todo]);
    setTodo("");
  };

  return (
    <div style={{ marginTop: 30 }}>
      <form onSubmit={onTodoSubmit}>
        <input name="todo" value={todo} onChange={onEnterTodo} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
