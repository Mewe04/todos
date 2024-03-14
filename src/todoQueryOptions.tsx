import { queryOptions } from '@tanstack/react-query';
import { fetchTodo } from './todos.tsx';

export const todoQueryOptions = (todoId: string) =>
  queryOptions({
    queryKey: ['todos', { todoId }],
    queryFn: () => fetchTodo(todoId),
  });
