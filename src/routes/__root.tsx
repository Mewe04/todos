import { createRootRoute, Outlet } from '@tanstack/react-router';
import type { FC } from 'react';
import { Header } from '../components';

export const Root: FC = () => {
  return (
    <>
      <Header />
      {/* <div className="p-2 flex gap-2"> */}
      {/* 	<Link to="/" className="[&.active]:font-bold"> */}
      {/* 		Home */}
      {/* 	</Link>{' '} */}
      {/* 	<Link to="/about" className="[&.active]:font-bold"> */}
      {/* 		About */}
      {/* 	</Link> */}
      {/* </div> */}
      <main className='w-full bg-gray-400/20'>
        <div className='container mx-auto min-h-[calc(100vh_-_80px)] py-4'>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export const Route = createRootRoute({
  component: Root,
});
