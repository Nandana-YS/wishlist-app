"use client";
import AddTask from '@/components/AddTask';
import TaskList from '@/components/TaskList';
import { TasksProvider } from '@/components/TasksContext';

export default function TaskApp() {
  return (
    <TasksProvider>
      <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow mt-10">
        <h1 className="text-2xl font-bold mb-4">Day off in Kyoto</h1>
        <AddTask />
        <TaskList />
      </div>
    </TasksProvider>
  );
}
