'use client';

import Image from 'next/image';
import React from 'react';

const Header = ({ toggleSidebar, isSidebar }: { isSidebar: boolean, toggleSidebar: () => void }) => {
  return (
    <header className='w-full h-[60px] px-5 flex items-center justify-between bg-white'>
      <h1 className='font-bold text-black text-[20px]'>moje <span className='text-aquablue'>Kysuce</span></h1>
      {!isSidebar &&
      <Image onClick={toggleSidebar}
        src="/menu.svg"
        alt="menu"
        width={24}
        height={24}/>}
      {isSidebar &&
      <Image onClick={toggleSidebar}
        src="/close.svg"
        alt="close"
        width={24}
        height={24}/>}
    </header>
  );
}

export default Header;
