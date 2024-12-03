import React from 'react';

export function TodoStats({ todos }) {
  const remainingCount = todos.filter(t => !t.completed).length;
  
  return (
    <div className="text-center text-sm text-gray-500">
      {todos.length} {todos.length === 1 ? 'item' : 'items'} •{' '}
      {remainingCount} remaining
    </div>
  );
}