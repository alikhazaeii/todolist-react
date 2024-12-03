import React, { useState } from 'react';
import { TodoHeader } from './components/todo/TodoHeader.jsx';
import { TodoInput } from './components/todo/TodoInput.jsx';
import { TodoList } from './components/todo/TodoList.jsx';
import { TodoFilters } from './components/todo/TodoFilters.jsx';
import { TodoStats } from './components/todo/TodoStats.jsx';
import { useTodos } from './hooks/usetodos.js';

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