import React, { useState } from 'react';
import { Calendar, X } from 'lucide-react';
import { Button } from '../ui/Button.jsx';
import { formatDateTimeInput } from '../../utils/datautils.js';

export function TodoDatePicker({ dueDate, onDateChange }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleDateChange = (e) => {
    const date = new Date(e.target.value);
    onDateChange(date);
  };

  const clearDate = () => {
    onDateChange(null);
    setIsEditing(false);
  };

  if (!isEditing && !dueDate) {
    return (
      <Button variant="ghost" size="sm" onClick={() => setIsEditing(true)}>
        <Calendar className="w-5 h-5" />
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      {isEditing ? (
        <input
          type="datetime-local"
          value={dueDate ? formatDateTimeInput(dueDate) : ''}
          onChange={handleDateChange}
          onBlur={() => setIsEditing(false)}
          className="px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          autoFocus
        />
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="text-sm text-gray-500 hover:text-blue-500"
        >
          {dueDate?.toLocaleString()}
        </button>
      )}
      {dueDate && (
        <Button variant="danger" size="sm" onClick={clearDate}>
          <X className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
}