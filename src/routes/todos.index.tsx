import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute, Link } from '@tanstack/react-router';
import type { FC } from 'react';
import { todosQueryOptions } from '../todosQueryOptions.tsx';

export const TodosIndex: FC = () => {
  const todosQuery = useSuspenseQuery(todosQueryOptions);
  const todos = todosQuery.data;

  return (
    <section>
      <table className='w-full'>
        <thead className='border-b border-gray-700 uppercase'>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <th>{todo.id}</th>
              <th>
                <Link to='/todos/$todoId' params={{ todoId: `${todo.id}` }}>
                  {todo.title}
                </Link>
              </th>
              <th className='p-2'>
                <div
                  className={`mx-auto w-fit rounded-xl ${todo.completed ? 'bg-green-500' : 'bg-amber-300'} px-3 py-1 uppercase text-white`}
                >
                  {todo.completed ? 'Completed' : 'In progress'}
                </div>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export const Route = createFileRoute('/todos/')({
  // @ts-ignore
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(todosQueryOptions),
  component: TodosIndex,
});
