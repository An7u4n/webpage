import React from 'react';
import { FaFolder } from 'react-icons/fa';

const SidebarIcon = ({ icon }) => {
  return <div className="pr-2">{icon}</div>;
};

const SideBarTaskComponent = ({ task }) => {
  return (
    <div className="side-bar-task">
      <SidebarIcon icon={<FaFolder size="28" />} />
      {task.name}
    </div>
  );
};

export default SideBarTaskComponent;
