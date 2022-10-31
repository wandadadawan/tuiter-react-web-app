import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addTodo, deleteTodo, todoDoneToggle} from "./reducers/todos-reducer";

const Todos = () => {
  const todos = useSelector(state => state.todos);
  const [todo, setTodo] = useState({do: ''});
  const dispath = useDispatch();
  const toggleTodoDone = (todo) => {
    dispath(todoDoneToggle(todo));
  };
  const deleteTodoClickHandler = (index) => {
    dispath(deleteTodo(index));
  };
  const createTodoClickHandler = () => {
    dispath(addTodo(todo));
  };
  const todoChangeHandler = (event) => {
    const doValue = event.target.value;
    const newTodo = {
      do: doValue
    };
    setTodo(newTodo);
  }

  return (
    <>
      <h3>Todos</h3>
      <ul className="list-group">
        <li className="list-group-item">
          <button onClick={createTodoClickHandler}
                  className="btn btn-primary w-25 float-end">
            Create</button>
          <input
            onChange={todoChangeHandler}
            value={todo.do}
            className="form-control w-75"/>
        </li>
        {
          todos.map((todo, index) =>
            <li className="list-group-item" key={todo._id}>
              <button onClick={() => deleteTodoClickHandler(index)}
                className="btn btn-danger float-end ms-2">
                Delete
              </button>
              <input type="checkbox"
                     checked={todo.done}
                     onChange={() => toggleTodoDone(todo)}
                     className="me-2"/>
              {todo.do}
            </li>)
        }
      </ul>
    </>
  );
};
export default Todos;