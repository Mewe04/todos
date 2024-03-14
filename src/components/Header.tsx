import { Link } from '@tanstack/react-router';
import { ListTodo, LogOut } from 'lucide-react';
import type { FC } from 'react';

import userAvatar from '../assets/img/userAvatar.jpg';

export const Header: FC = () => {
  return (
    <header className='h-20 w-full border-b border-gray-700 bg-black px-10 py-5 text-white'>
      <nav className='flex items-center justify-between'>
        <div>
          <Link
            to='/'
            className='flex items-center gap-2 text-3xl font-bold uppercase text-white'
          >
            <ListTodo size={28} color='#ffffff' />
            Todos
          </Link>
        </div>
        <div>
          <ul className='flex gap-4 font-semibold uppercase'>
            <li className='cursor-pointer transition hover:text-white/80'>
              <Link to='/' className='[&.active]:text-white/80'>
                Home
              </Link>
            </li>
            <li className='cursor-pointer transition hover:text-white/80'>
              <Link to='/todos' className='[&.active]:text-white/80'>
                Todos
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex items-center gap-4 text-xl font-semibold uppercase'>
          <div className='h-10 w-10 overflow-hidden rounded-full'>
            <img
              src={userAvatar}
              alt='User avatar'
              className='h-full w-full object-cover'
            />
          </div>
          Username
          <div className='cursor-pointer rounded-md p-2 transition hover:bg-gray-500/50'>
            <LogOut size={20} color='#ffffff' />
          </div>
        </div>
      </nav>
    </header>
  );
};
