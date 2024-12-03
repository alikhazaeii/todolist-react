import React from 'react';
import { CheckSquare } from 'lucide-react';

export function TodoHeader() {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-2 mb-4">
        <CheckSquare className="w-8 h-8 text-blue-500" />
        <h1 className="text-3xl font-bold text-gray-900">Todo List</h1>
      </div>
      <p className="text-gray-600">Stay organized and get things done</p>
    </div>
  );
}