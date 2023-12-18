import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      if (editingIndex !== null) {
        // If editing, update the task
        const updatedTasks = [...tasks];
        updatedTasks[editingIndex] = newTask;
        setTasks(updatedTasks);
        setEditingIndex(null);
      } else {
        // If not editing, add a new task
        setTasks([...tasks, newTask]);
      }
      setNewTask('');
    }
  };

  const handleEditTask = (index) => {
    setNewTask(tasks[index]);
    setEditingIndex(index);
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    setEditingIndex(null);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add or update a task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTask}>
          {editingIndex !== null ? 'Update Task' : 'Add Task'}
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleEditTask(index)}>Edit</button>
            <button onClick={() => handleRemoveTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

