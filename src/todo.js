import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "./actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function Todo({ id, title }) {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const dispatch = useDispatch();

  const handleTodo = () => {
    if (newTitle.trim()) {
      dispatch(editTodo({ id, title: newTitle }));
      setEditing(false);
    }
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="w-100 mb-3">
      {editing ? (
        <div className="input-group">
          <input
            className="form-control "
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            type="text"
          />
          <button className="btn btn-primary " onClick={handleTodo}>
            Save
          </button>
        </div>
      ) : (
        <li className="list-group-item d-flex justify-content-between align-items-center rounded custom-list-item">
          <span className="">{title}</span>
          <div>
            <button
              className="btn btn-link "
              onClick={() => setEditing(true)}
            >
              <FontAwesomeIcon className="text-primary" icon={faEdit} />
            </button>
            <button className="btn btn-link text-white" onClick={handleDelete}>
              <FontAwesomeIcon className="text-primary" icon={faTrash} />
            </button>
          </div>
        </li>
      )}
    </div>
  );
}

export default Todo;
