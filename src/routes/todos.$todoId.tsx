import {
  createFileRoute,
  ErrorComponent,
  type ErrorRouteProps,
  Link,
} from '@tanstack/react-router';
import { todoQueryOptions } from '../todoQueryOptions.tsx';
import { TodoNotFoundError } from '../todos.tsx';

export const Todo = () => {
  const todo = Route.useLoaderData();

  return (
    <section className='flex flex-col items-center gap-2'>
      <Link
        to='/todos'
        className='block self-start py-1 text-blue-800 hover:text-blue-600'
      >
        ← All Todos
      </Link>
      <h3 className='text-2xl font-bold'>{todo.title}</h3>
      <div className='flex items-center gap-2'>
        Status -
        <div
          className={`mx-auto w-fit rounded-xl ${todo.completed ? 'bg-green-500' : 'bg-amber-300'} px-3 py-1 uppercase text-white`}
        >
          {todo.completed ? 'Completed' : 'In progress'}
        </div>
      </div>
    </section>
  );
};

export const TodoErrorComponent = ({ error }: ErrorRouteProps) => {
  if (error instanceof TodoNotFoundError) {
    return (
      <div className='mx-auto flex justify-center text-xl font-bold'>
        {error.message}
      </div>
    );
  }

  return <ErrorComponent error={error} />;
};

export const Route = createFileRoute('/todos/$todoId')({
  // @ts-ignore
  loader: ({ context: { queryClient }, params: { todoId } }) =>
    queryClient.ensureQueryData(todoQueryOptions(todoId)),
  errorComponent: TodoErrorComponent as any,
  component: Todo,
});
