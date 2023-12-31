import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import CloseButton from './close_button';

const TaskComponent = ({ task }) => {
  return (
    <div className="bg-red-300 rounded-2xl flex flex-col relative mb-2 p-2">
      <CloseButton />
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
