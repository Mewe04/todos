import { instance } from './api/api.ts';

export type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export class TodoNotFoundError extends Error {}

export const fetchTodo = async (todoId: string) => {
  const todo = await instance
    .get<TodoType>(`todos/${todoId}`)
    .then((r) => r.data)
    .catch((err) => {
      if (err.response.status === 404) {
        throw new TodoNotFoundError(`Todo with id ${todoId} not found!`);
        throw err;
      }
    });
  return todo;
};

export const fetchTodos = async () => {
  return instance.get<TodoType[]>('todos').then((r) => r.data.slice(0, 10));
};
