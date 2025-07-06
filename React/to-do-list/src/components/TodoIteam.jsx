import React from "react";
import "./TodoIteam.css";
const TodoIteam = ({ task, toggle, onDelete }) => {
  return (
    <li
      className={`list ${task.completed ? "completed" : ""}`}
      onClick={() => toggle(task.id)}
    >
      {task.text}
      <span
        onClick={(e) => {
          e.stopPropagation();
          onDelete(task.id);
        }}
      >
        X
      </span>
    </li>
  );
};

export default TodoIteam;
