import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header className='w-full h-[60px] px-5 flex items-center justify-between bg-white'>
      <h1 className='font-bold text-black text-[20px]'>moje <span className='text-aquablue'>Kysuce</span></h1>
      <Image 
        src="/menu.svg"
        alt="menu"
        width={24}
        height={24}/>
    </header>
  );
}

export default Header;
