import React, { useEffect, useState } from 'react';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

function TaskListComponent() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:7056/api/Tasks', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setTasks(
          data.map((taskData) => (
            <TaskComponent
              key={taskData.id}
              task={
                new Task(
                  taskData.name,
                  taskData.description,
                  taskData.status,
                  taskData.priority,
                )
              }
            />
          )),
        );
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return <div className="p-2 bg-gray-400 flex-1">{tasks}</div>;
}

export default TaskListComponent;
