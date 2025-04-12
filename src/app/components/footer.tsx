'use client';

import React from 'react';
import Home from '../../../public/sidebar/home.svg';
import Map from '../../../public/sidebar/map.svg';
import Events from '../../../public/sidebar/events.svg';
import Samosprava from '../../../public/sidebar/samosprava.svg';
import Profile from '../../../public/sidebar/profile.svg';

const Button = ({ text, choosen, component: Component }: { text: string, choosen?: boolean, component: React.ElementType }) => {
  return (
    <div className='flex flex-col items-center w-full'>
      <Component className={`icon ${choosen ? 'text-aquablue' : ''}`} width={20} height={20} />
      <p className={`font-bold text-[11px] ${choosen ? 'text-aquablue' : ''}`}>{text}</p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className='fixed bottom-0 w-full h-[60px] px-[10px] flex items-center justify-between bg-white'>
      <Button component={Home} text="Domov" choosen={true} />
      <Button component={Map} text="Mapa" />
      <Button component={Events} text="Podujatia" />
      <Button component={Samosprava} text="Samosprava" />
      <Button component={Profile} text="Profil" />
    </footer>
  );
}

export default Footer;
