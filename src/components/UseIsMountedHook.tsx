import { useEffect, useState } from 'react';
import { useIsMounted } from '../hooks/useIsMounted';

interface TodoItem {
  userId: string;
  id: number;
  title: string;
  completed: boolean;
}

export const UseIsMountedHook = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const isMounted = useIsMounted();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(items => {
        if (!isMounted.current) {
          return;
        }
        setTodos(items);
      });
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: 5,
      }}
    >
      {todos.map(todo => (
        <span key={todo.id}>
          {todo.title} {todo.completed ? '+' : '-'}
        </span>
      ))}
    </div>
  );
};
