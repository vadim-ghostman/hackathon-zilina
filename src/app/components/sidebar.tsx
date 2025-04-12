'use client';

import React from 'react';
import Home from '../../../public/sidebar/home.svg';
import Map from '../../../public/sidebar/map.svg';
import Events from '../../../public/sidebar/events.svg';
import Location from '../../../public/location.svg';
import CZ_flag from '../../../public/cz_flag.svg';
import SK_flag from '../../../public/sk_flag.svg';
import PL_flag from '../../../public/pl_flag.svg';
import UK_flag from '../../../public/uk_flag.svg';

const Button = ({ text, choosen, component: Component }: { text: string, choosen?: boolean, component: React.ElementType }) => {
  return (
    <div className='flex items-center gap-[15px] w-full'>
      <Component className={`icon ${choosen ? 'text-aquablue' : ''}`} width={40} height={40} />
      <p className={`font-bold text-[24px] ${choosen ? 'text-aquablue' : ''}`}>{text}</p>
    </div>
  );
};


const Sidebar = () => {
  return (
    <div className='bg-white py-5 pb-20 px-[20px] justify-between fixed top-[60px] left-0 flex flex-col w-full h-full z-10'>
      <div className='flex flex-col gap-[10px]'>
        <Button component={Home} text="Domov" choosen={true} />
        <Button component={Map} text="Mapa" />
        <Button component={Events} text="Podujatia" />
        <Button component={Location} text="Zaujimave miesta" />
        <div
          className="flex cursor-pointer flex-col items-center w-full text-white rounded-[10px] py-[10px] bg-aquablue text-[18px] font-bold shadow-[0_2px_4px_rgba(0,0,0,0.25)]"
        >
          Som Kysučan
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <div className='flex justify-between w-full mt-4'>
          <div className='flex items-center w-full justify-center border-b-4 border-aquablue pb-2'>
            <SK_flag className='cursor-pointer'/>
          </div>
          <div className='flex items-center w-full justify-center border-b border-[#a8a8a8] pb-2'>
            <CZ_flag className='cursor-pointer'/>
          </div>
          <div className='flex items-center w-full justify-center border-b border-[#a8a8a8] pb-2'>
            <PL_flag className='cursor-pointer'/>
          </div>
          <div className='flex items-center w-full justify-center border-b border-[#a8a8a8] pb-2'>
            <UK_flag className='cursor-pointer'/>
          </div>
        </div>
        <p className='font-bold text-[20px]'>Máte nejaké otázky? <span className='text-aquablue'>Kontaktujte nás</span></p>
      </div>
      {/* <Button component={Samosprava} text="Samosprava" />
      <Button component={Profile} text="Profil" /> */}
    </div>
  );
}

export default Sidebar;
