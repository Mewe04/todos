import { queryOptions } from '@tanstack/react-query';
import { fetchTodos } from './todos.tsx';

export const todosQueryOptions = queryOptions({
  queryKey: ['todos'],
  queryFn: () => fetchTodos(),
});
