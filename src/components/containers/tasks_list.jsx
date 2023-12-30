import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import { LEVEL } from '../../models/levels.enum';

function TaskListComponent() {
  const defaultTask = new Task('Task', 'Task description', true, LEVEL.low);

  // Connection with API
  // Load the saved tasks
  const getRequest = () => {
    let url = 'https://localhost:7056/api/Tasks';

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => buildTasks(data))
      .catch((error) => console.error('Error:', error));
  };
  // OnLoad function manager
  const onPageLoad = () => {
    // Load Tasks
    getRequest();
  };

  useEffect(() => {
    onPageLoad();
  }, []);

  const [content, setContent] = useState('');

  const buildTasks = (data) => {
    let taskBody = new Task(
      data[0].name,
      data[0].description,
      data[0].status,
      data[0].priority,
    );
    let newContent = <TaskComponent task={taskBody} />;
    setContent((prevContent) => prevContent + newContent);
  };

  return (
    <div className="p-2 bg-gray-400 flex-1">
      <TaskComponent task={defaultTask} />
    </div>
  );
}

// TaskListComponent.propTypes = {};

export default TaskListComponent;
