import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Forum',
    path: '/forum',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'E-library',
    path: '/library',
    icon: <FaIcons.FaBook />,
    cName: 'nav-text'
  },
  {
    title: 'Flashcards',
    path: '/flashcards',
    icon: <IoIcons.IoIosAlbums />,
    cName: 'nav-text'
  },
  {
    title: 'HealGPT',
    path: '/healthgpt',
    icon: <IoIcons.IoIosChatboxes />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <IoIcons.IoMdPerson />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Log Out',
    // path: '/login',
  //   icon: <IoIcons.IoMdLogOut />,
  //   cName: 'nav-text',
  // }
];