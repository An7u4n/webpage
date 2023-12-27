import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

const TaskComponent = ({ task }) => {
  return (
    <div className="bg-red-300 rounded-2xl pl-2 w-full h-max">
      <h2 className="text-white font-mono font-bold text-[48px]">
        {task.name}
      </h2>
      <p>{task.description}</p>
      <p>{task.priority}</p>
      <p>Task is: {task.completed ? 'Completed' : 'In Progress'}</p>
    </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
