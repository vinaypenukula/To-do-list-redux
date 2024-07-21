import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './actions';
import TodoList from './todoList';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const [todoTitle, setTodoTitle] = useState("");

  const handleTodo = () => {
    if (todoTitle.trim()) {
      const newTodo = {
        title: todoTitle
      };
      dispatch(addTodo(newTodo));
      setTodoTitle("");
    }
  };

  return (
    <div className="app-container d-flex flex-column align-items-center justify-content-center">
      <div className="todo-container p-4 rounded">
        <h3 className="text-primary text-center mb-4">To-Do-List Redux</h3>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control "
            placeholder=""
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
          />
          <button className="btn btn-primary " onClick={handleTodo}>
            Add Task
          </button>
        </div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
