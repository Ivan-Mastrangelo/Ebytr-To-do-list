import axios from "axios";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import tasksContext from "./TasksContex.jsx";

function TasksProvider({ children }) {
  const url = "http://localhost:3001/tasks";
  const [tasksList, setTasksList] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    axios.get(url).then((response) => {
      setTasksList(response.data);
    });
  }, []);

  const addTaskDB = (title) => {
    axios.post(url, { title, description: "" }).then(() => {
      axios.get(url).then((response) => {
        setTasksList(response.data);
      });
    });
  };

  const editTask = (id, title) => {
    axios.put(`${url}/${id}`, { title, description: "" }).then(() => {
      axios.get(url).then((response) => {
        setTasksList(response.data);
      });
    });
  };

  const ereaseTask = (taskId) => {
    axios.delete(`${url}/${taskId}`).then(() => {
      axios.get(url).then((response) => {
        setTasksList(response.data);
      });
    });
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const data = {
    tasksList,
    setTasksList,
    newTask,
    setNewTask,
    addTaskDB,
    ereaseTask,
    editTask,
  };

  return <tasksContext.Provider value={data}>{children}</tasksContext.Provider>;
}

TasksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TasksProvider;

// const getTasks = async () => {
//   const result = await fetch(endpoint).then((response) => response.json());
//   console.log(result);
