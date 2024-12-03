import React, { useState } from 'react';
import { Check, Trash2, Edit2, Save, X } from 'lucide-react';
import { Button } from '../ui/Button.jsx';
import { TodoDatePicker } from './TodoDatePicker.jsx';
import clsx from 'clsx';

export function TodoItem({ todo, onToggle, onDelete, onDateChange, onTextChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
    setEditText(todo.text);
  };

  const handleSave = () => {
    if (editText.trim()) {
      onTextChange(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditText(todo.text);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={() => {
          onToggle(todo.id);
          if (!todo.dueDate) {
            onDateChange(todo.id, new Date());
          }
        }}
        className={clsx(
          'w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors',
          todo.completed
            ? 'bg-green-500 border-green-500'
            : 'border-gray-300 hover:border-green-500'
        )}
      >
        {todo.completed && <Check className="w-4 h-4 text-white" />}
      </button>

      <div className="flex-1 flex flex-col">
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="px-2 py-1 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            autoFocus
          />
        ) : (
          <span
            className={clsx(
              todo.completed ? 'text-gray-400 line-through' : 'text-gray-700'
            )}
          >
            {todo.text}
          </span>
        )}
        {todo.dueDate && (
          <span className="text-xs text-gray-500">
            Due: {todo.dueDate.toLocaleString()}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2">
        <TodoDatePicker
          dueDate={todo.dueDate}
          onDateChange={(date) => onDateChange(todo.id, date)}
        />
        
        {isEditing ? (
          <>
            <Button variant="success" size="sm" onClick={handleSave}>
              <Save className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" onClick={handleCancel}>
              <X className="w-5 h-5" />
            </Button>
          </>
        ) : (
          <Button variant="ghost" size="sm" onClick={handleEdit}>
            <Edit2 className="w-5 h-5" />
          </Button>
        )}
        
        <Button variant="danger" size="sm" onClick={() => onDelete(todo.id)}>
          <Trash2 className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}