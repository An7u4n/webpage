import React from 'react';
// import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import { LEVEL } from '../../models/levels.enum';

function TaskListComponent() {
  const defaultTask = new Task('Task', 'Task description', true, LEVEL.low);

  return (
    <div className="p-2 bg-gray-400 flex-1">
      <TaskComponent task={defaultTask} />
    </div>
  );
}

// TaskListComponent.propTypes = {};

export default TaskListComponent;
