import React from 'react';

function TaskInput() {
  const dataHandler = (e) => {
    e.preventDefault();
    const url = 'https://localhost:7056/api/Tasks/';
    const data = {
      name: e.target.name.value,
      description: e.target.description.value,
      status: false,
      priority: e.target.priority.value,
      createdAt: new Date(),
    };
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        window.location.reload();
        return response.json;
      })
      .catch((error) => console.log(error));
  };

  return (
    <form className="mt-10" onSubmit={dataHandler}>
      <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="relative z-0">
          <input
            type="text"
            name="name"
            className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
            Task Name
          </label>
        </div>
        <div className="relative z-0">
          <select
            name="priority"
            className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
            Task Priority
          </label>
        </div>
        <div className="relative z-0 col-span-2">
          <textarea
            name="description"
            rows="5"
            className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
          ></textarea>
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
            Task Description
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="mt-5 rounded-md bg-black px-10 py-2 text-white font-bold font-mono"
      >
        ADD TASK
      </button>
    </form>
  );
}

export default TaskInput;
