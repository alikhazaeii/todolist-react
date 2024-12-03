import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { Button } from '../ui/Button.jsx';

export function TodoInput({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Lets Do It ;)"
        className="flex-1 px-4 py-2 rounded-lg border bg-red-200 placeholder:text-black focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
      />
      <Button type="submit">
        <PlusCircle className="w-5 h-5" />
      </Button>
    </form>
  );
}