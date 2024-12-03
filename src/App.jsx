import React, { useState } from 'react';
import { TodoHeader } from './components/todo/TodoHeader';
import { TodoInput } from './components/todo/TodoInput';
import { TodoList } from './components/todo/TodoList';
import { TodoFilters } from './components/todo/TodoFilters';
import { TodoStats } from './components/todo/TodoStats';
import { useTodos } from './hooks/useTodos';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, updateTodoDueDate, updateTodoText } = useTodos();
  const [filter, setFilter] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto py-12 px-4">
        <TodoHeader />
        
        <div className="space-y-6">
          <TodoInput onAdd={addTodo} />
          <TodoFilters activeFilter={filter} onFilterChange={setFilter} />
          <TodoList
            todos={todos}
            filter={filter}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onDateChange={updateTodoDueDate}
            onTextChange={updateTodoText}
          />
          <TodoStats todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;