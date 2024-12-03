import { useState, useCallback } from 'react';

export function useTodos() {
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback((text) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: new Date(),
      dueDate: null,
    };
    setTodos((prev) => [...prev, newTodo]);
  }, []);

  const toggleTodo = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const updateTodoDueDate = useCallback((id, dueDate) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, dueDate } : todo))
    );
  }, []);

  const updateTodoText = useCallback((id, text) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  }, []);

  return { 
    todos, 
    addTodo, 
    toggleTodo, 
    deleteTodo, 
    updateTodoDueDate,
    updateTodoText 
  };
}