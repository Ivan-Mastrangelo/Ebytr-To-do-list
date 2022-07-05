import React, { useContext } from "react";

import tasksContext from "../context/TasksContex.jsx";

function TaskInsert() {
  const { newTask, setNewTask, addTaskDB } = useContext(tasksContext);

  const handleChange = ({ target }) => {
    setNewTask(target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    addTaskDB(newTask);
    setNewTask("");
  };

  return (
    <section>
      <input
        value={newTask}
        onChange={handleChange}
        type="text"
        placeholder="Insert a new task"
      />
      <button type="submit" onClick={handleClick}>
        commit
      </button>
    </section>
  );
}

export default TaskInsert;
