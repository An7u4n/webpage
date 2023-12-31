import React from 'react';

// TODO: Refresh page after delete

const CloseButton = () => {
  const deleteTask = (e) => {
    const url = 'https://localhost:7056/api/Tasks/' + e.target.closest('tr').id;
    const options = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };

    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error:' + response.status);
        }
        window.location.reload();
      })
      .catch((error) => console.error('Error', error));
  };
  return (
    <button
      type="button"
      className="rounded-md inline-flex items-center justify-center text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
      onClick={deleteTask}
    >
      <span className="sr-only">Close menu</span>

      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

export default CloseButton;
