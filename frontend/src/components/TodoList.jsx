import React, { useContext } from "react";

import tasksContext from "../context/TasksContex.jsx";
// import TaskComponents from "./TaskComponents.jsx";

function TodoList() {
  const { tasksList, ereaseTask, editTask } = useContext(tasksContext);

  return (
    <main>
      <section>
        {tasksList.map((task) => (
          <div key={task.id}>
            <span>{task.title}</span>
            <button type="button" onClick={() => editTask(task.id)}>
              Edit
            </button>
            <button type="button" onClick={() => ereaseTask(task.id)}>
              Erease
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}

export default TodoList;
