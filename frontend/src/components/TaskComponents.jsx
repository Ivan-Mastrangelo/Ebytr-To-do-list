import PropTypes from "prop-types";
import React, { useState } from "react";

function TaskComponents({ task, edit, erease }) {
  const [editable, setEditable] = useState(false);
  const [status, setStatus] = useState();
  const [runningTask, setRunningTask] = useState(task.title);

  return (
    <>
      {editable ? (
        <>
          <div>
            <input
              type="text"
              value={runningTask}
              onChange={({ target }) => setRunningTask(target.value)}
            />
          </div>
          <div>
            <select
              value={status}
              onChange={({ target }) => setStatus(target.value)}
            >
              <option value="inProgress">in progress</option>
              <option value="done">done</option>
            </select>
            <button
              type="button"
              onClick={() => {
                edit(task.id, editTask, status);
                setEditable(false);
              }}
            >
              Save
            </button>
            <button type="button" onClick={() => erease(task.id)}>
              Erease
            </button>
          </div>
        </>
      ) : (
        <>
          <div>
            <input type="text" value={runningTask} readOnly />
          </div>
          <div>
            <select value={status} disabled>
              <option value="inProgress">in progress</option>
              <option value="done">done</option>
            </select>
            <button type="button" onClick={() => setEditable(true)}>
              Edit
            </button>
            <button type="button" onClick={() => erease(task.id)}>
              Erease
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default TaskComponents;

TaskComponents.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  edit: PropTypes.func.isRequired,
  erease: PropTypes.func.isRequired,
};

{
  /* <TaskComponents task={task} edit={editTask} erease={ereaseTask} /> */
}
