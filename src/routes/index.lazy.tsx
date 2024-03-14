import { createLazyFileRoute } from '@tanstack/react-router';
import type { FC } from 'react';

export const Index: FC = () => {
  return (
    <section className='flex justify-center'>
      <h3 className='text-xl font-bold'>Welcome Home!</h3>
    </section>
  );
};

export const Route = createLazyFileRoute('/')({
  component: Index,
});
