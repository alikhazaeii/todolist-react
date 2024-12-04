import React, { useState } from 'react';
import { TodoHeader } from './components/todo/TodoHeader.jsx';
import { TodoInput } from './components/todo/TodoInput.jsx';
import { TodoList } from './components/todo/TodoList.jsx';
import { TodoFilters } from './components/todo/TodoFilters.jsx';
import { TodoStats } from './components/todo/TodoStats.jsx';
import { useTodos } from './hooks/usetodos.js';
import Cursor from './components/todo/cursor.jsx';
import ParticleCanvas from './components/todo/ParticleCanvas.jsx';
'use client'

export default function App() {
  const [hover, setHover] = useState(false)

  const { todos, addTodo, toggleTodo, deleteTodo, updateTodoDueDate, updateTodoText } = useTodos();
  const [filter, setFilter] = useState('all');

  return (
    <div className="min-h-screen cursor-none ">
      <div className="max-w-2xl mx-auto py-12 px-4 relative z-20 ">
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
      <div className='w-full h-[100svh] bg-gray-900 absolute top-0 left-0 z-10'>
        <ParticleCanvas />
        
      </div>
    </div>

  );
}

