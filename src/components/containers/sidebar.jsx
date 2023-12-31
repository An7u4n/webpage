import React from 'react';
import SideBarTaskComponent from '../pure/sidebartask';
import { Task } from '../../models/task.class';

// TODO: Create project class

function SideBar(props) {
  const defaultTask = new Task(
    1,
    'Task 1',
    'Description Task 1',
    false,
    'normal',
  );

  return (
    <div className="w-40 h-screen p-2 bg-gray-900 relative top-0 left-0">
      <p className="text-white font-mono font-bold text-center pt-2 text-xl">
        PROJECTS
      </p>
      <SideBarTaskComponent task={defaultTask} />
    </div>
  );
}

export default SideBar;
