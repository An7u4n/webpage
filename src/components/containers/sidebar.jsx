import React from 'react';
import SideBarTaskComponent from '../pure/sidebartask';
import { Task } from '../../models/task.class';

function SideBar(props) {
  const defaultTask = new Task('Task 1', 'Description Task 1', false, 'normal');

  // Get request to: https://localhost:7056/api/Tasks
  const getRequest = () => {
    let url = 'https://localhost:7056/api/Tasks';

    fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Error de red: ' + response.status);
        }
        return response.json();
      })
      .then(function (data) {
        console.log('Datos recibidos:', data);
      })
      .catch(function (error) {
        console.error('Error:', error.message);
      });
  };

  return (
    <div className="w-40 h-screen p-2 bg-gray-900 relative top-0 left-0">
      <p className="text-white font-mono font-bold text-center pt-2 text-xl">
        PROJECTS
      </p>
      <SideBarTaskComponent task={defaultTask} />
      <button onClick={getRequest}>GET</button>
    </div>
  );
}

export default SideBar;
