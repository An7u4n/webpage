import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import CloseButton from './close_button';

const TaskComponent = ({ task }) => {
  const url = 'https://localhost:7056/api/Tasks/' + task.id;
  const [isHovered, setIsHovered] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    if (!isDropdownOpen) setIsDropdownOpen(true);
  };

  // Set text-color by priority
  const getPriorityClass = () => {
    switch (task.priority) {
      case 'low':
        return 'bg-green-100';
      case 'medium':
        return 'bg-yellow-100';
      case 'high':
        return 'bg-red-100';
      default:
        return '';
    }
  };

  // PUT CALLS
  const handlePriorityChange = (newPriority) => {
    fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: task.id,
        name: task.name,
        description: task.description,
        priority: newPriority,
        status: task.completed,
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        window.location.reload();
        return response.json;
      })
      .catch((error) => console.log(error));
  };

  const statusChangeHandler = () => {
    fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: task.id,
        name: task.name,
        description: task.description,
        priority: task.priority,
        status: !task.completed,
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        window.location.reload();
        return response.json;
      })
      .catch((error) => console.log(error));

    task.completed = !task.completed;
  };

  return (
    <tr
      className={`bg-gray-100 border-b hover:bg-white duration-100 ${getPriorityClass()}`}
      id={task.id}
    >
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {task.name}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {task.description}
      </td>
      <td
        className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap cursor-pointer"
        onClick={toggleDropdown}
        style={{ cursor: 'pointer' }}
      >
        {isDropdownOpen ? (
          <select
            value={task.priority}
            onChange={(e) => handlePriorityChange(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        ) : (
          task.priority
        )}
      </td>
      <td
        className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={statusChangeHandler}
        style={{ cursor: 'pointer' }}
      >
        {isHovered
          ? task.completed
            ? 'In Progress'
            : 'Pause Task'
          : task.completed
          ? 'Not Started/Paused'
          : 'In Progress'}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <CloseButton />
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
