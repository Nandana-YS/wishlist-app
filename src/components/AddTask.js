"use client";
import { useState } from 'react';
import { useTasksDispatch } from '@/components/TasksContext';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();
  return (
    <div className="flex items-center mb-4">
      <input
        className="flex-1.5 px-3 py-0 border border-black rounded mr-1"
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        className="px-3 py-0 border border-black rounded text-black bg-gray-200"
        onClick={() => {
          setText('');
          dispatch({
            type: 'added',
            id: nextId++,
            text: text,
          }); 
        }}
      >
        Add
      </button>
    </div>
  );
}

let nextId = 3;
