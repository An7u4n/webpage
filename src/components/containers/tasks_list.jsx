import React, { useEffect, useState } from 'react';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import TaskInput from '../pure/task_input';

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
                  taskData.id,
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

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Priority
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>{tasks}</tbody>
            </table>
            <TaskInput />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskListComponent;
