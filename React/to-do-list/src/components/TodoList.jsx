import React from "react";
import TodoIteam from "./TodoIteam";
import './TodoList.css'
const TodoList = ({ tasks, toggle, onDelete }) => {
  return (
    <ul>
      {tasks.map((t) => ( 
        <TodoIteam key = {t.id} task = {t}
         toggle = {toggle} onDelete = {onDelete} />
      ))}
    </ul>
  );
};

export default TodoList;
