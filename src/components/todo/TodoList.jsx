import React from 'react';
import { TodoItem } from './TodoItem.jsx';

export function TodoList({ todos, filter, onToggle, onDelete, onDateChange, onTextChange }) {
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="space-y-2">
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onDateChange={onDateChange}
          onTextChange={onTextChange}
        />
      ))}
      {filteredTodos.length === 0 && (
        <p className="text-center text-red-500 py-4">No todos to display</p>
      )}
    </div>
  );
}