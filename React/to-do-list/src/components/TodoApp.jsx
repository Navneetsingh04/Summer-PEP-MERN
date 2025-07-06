import { useState , useEffect } from "react";
import TodoList from "./TodoList";
import './TodoApp.css';
const TodoApp = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storeTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storeTasks) {
      setTasks(storeTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task == "") {
      alert("Add some Task first!");
      return;
    }
    const newTask = { id: Date.now(), text: task, completed: false };
    setTask("");
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    const update = tasks.map((t) => 
      t.id === id ? { ...t, completed: !TodoApp.completed } : t
    );
    setTasks(update);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="todo-app">
      <h2>To-Do List</h2>
      <div>
        <input
          type="text"
          placeholder="Add a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <TodoList tasks={tasks} toggle={toggleTask} onDelete={deleteTask}/>
    </div>
  );
};

export default TodoApp;
