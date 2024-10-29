"use client";
import { useState } from 'react';
import { useTasks, useTasksDispatch } from './TasksContext.js';

export default function TaskList() {
  const tasks = useTasks();
  return (
    <ul className="p-0">
      {tasks.map(task => (
        <li key={task.id} className="mb-2 list-none">
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();
  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={e => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                text: e.target.value
              }
            });
          }}
          className="border rounded px-2 py-1"
        />
        <button
          onClick={() => setIsEditing(false)}
          className="bg-blue-600 border-none text-white px-2 py-1 cursor-pointer ml-2 rounded"
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button
          onClick={() => setIsEditing(true)}
          className="bg-gray-200 border border-black text-gray-800 px-3 py-0 cursor-pointer ml-2 rounded"
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          dispatch({
            type: 'changed',
            task: {
              ...task,
              done: e.target.checked
            }
          });
        }}
        className="mr-2"
      />
      {taskContent}
      <button
        onClick={() => {
          dispatch({
            type: 'deleted',
            id: task.id
          });
        }}
        className="bg-gray-200 border border-black text-gray-800 px-3 py-0 cursor-pointer ml-2 rounded"
      >
        Delete
      </button>
    </label>
  );
}
