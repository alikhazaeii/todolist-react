import React from 'react';
import { Button } from '../ui/Button.jsx';

const FILTERS = ['all', 'active', 'completed'];

export function TodoFilters({ activeFilter, onFilterChange }) {
  return (
    <div className="flex justify-center gap-5">
      {FILTERS.map((filter) => (
        <Button
          key={filter}
          variant={activeFilter === filter ? 'primary' : 'secondary'}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </Button>
      ))}
    </div>
  );
}