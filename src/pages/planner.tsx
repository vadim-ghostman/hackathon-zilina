import React from 'react';
import Back from '../../public/back.svg';
import Next from '../../public/next.svg';
import '../app/globals.css'
import { useRouter } from 'next/navigation';

const ListItem = ({ text, description, choosen, onclick }: { onclick: () => void, text: string, description: string, choosen?: boolean }) => {
  return !choosen ? (
    <div className='flex flex-col justify-center w-full p-4 rounded-[10px] bg-white border border-[#d9d9d9] transition-colors duration-300' onClick={onclick}>
      <p className='font-bold text-[18px]'>{text}</p>
      <p className='text-[18px]'>{description}</p>
    </div>
    ) : (
    <div className='flex flex-col justify-center w-full p-4 rounded-[10px] bg-white border border-aquablue text-aquablue transition-colors duration-300' onClick={onclick}>
      <p className='font-bold text-[18px]'>{text}</p>
      <p className='text-[18px]'>{description}</p>
    </div>
  );
}

const WhoGoesScreen = ({ choosen, setChoosen }: { choosen: number, setChoosen: (n: number) => void }) => {
  return (
    <div>
      <h1 className='font-semibold text-[30px] mt-7'>Kto ide?</h1>
      <h2 className='font-bold text-base mt-3'>Vyberte si cestujúcich</h2>
      <div className='flex flex-col gap-3 mt-5'>
        <ListItem onclick={() => setChoosen(1)} choosen={choosen == 1} text="Len ja" description="Osamelý cestovateľ na prieskume"/>
        <ListItem onclick={() => setChoosen(2)} choosen={choosen == 2} text="Pár" description="Dvaja cestovatelia v tandeme"/>
        <ListItem onclick={() => setChoosen(3)} choosen={choosen == 3} text="Rodina" description="Skupina zábavomilných dobrodruhov"/>
        <ListItem onclick={() => setChoosen(4)} choosen={choosen == 4} text="Priatelia" description="Skupinka hľadačov vzrušenia"/>
      </div>
    </div>
  );
}

const ChooseDateScreen = ({ date, setDate }: { date: string, setDate: (n: string) => void }) => {
  return (
    <div>
      <h1 className='font-semibold text-[30px] mt-7'>Dátumy cestovania</h1>

      <div>
        <div className='flex gap-8 items-center w-full justify-center'>
          <div className='flex size-10 items-center justify-center rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.25)] bg-white border border-[#d9d9d9]'>
            <Back className='icon' width={12} height={24} />
          </div>

          <p className='font-medium text-[16px]'>Marec 2026</p>

          <div className='flex size-10 items-center justify-center rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.25)] bg-white border border-[#d9d9d9]'>
            <Next className='icon' width={12} height={24} />
          </div>
        </div>
        <div>
          <div>Ne</div>
          <div>Po</div>
          <div>Ut</div>
          <div>St</div>
          <div>Št</div>
          <div>Pi</div>
          <div>So</div>
        </div>
      </div>
    </div>
  );
}

const NextButton = ({ setScreenIdx, screenIdx }: { setScreenIdx: (n: number) => void, screenIdx: number }) => {
  return (
    <div
      onClick={() => {setScreenIdx(screenIdx + 1);}}
      className="flex cursor-pointer flex-col items-center w-full justify-self-end text-white rounded-[10px] py-[20px] bg-aquablue text-[20px] font-bold shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
      Pokračovať
    </div>
  );
}

const Planner = () => {
  const [choosen, setChoosen] = React.useState(0);
  const [screenIdx, setScreenIdx] = React.useState(0);
  const router = useRouter();

  return (
    <div className='flex flex-col h-screen px-5 pt-5 pb-10 justify-between'>
      <div>
        <div
          onClick={() => {router.push('/');}}
          className='flex size-10 items-center justify-center rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.25)] bg-white border border-[#d9d9d9]'
        >
          <Back className='icon' width={12} height={24} />
        </div>
        {screenIdx == 1 && <ChooseDateScreen date={""} setDate={() => {}} />}
        {screenIdx == 0 && <WhoGoesScreen choosen={choosen} setChoosen={setChoosen} />}
      </div>

      {choosen > 0 && screenIdx == 0 && (
        <NextButton setScreenIdx={setScreenIdx} screenIdx={screenIdx} />
      )}
    </div>
  );
}

export default Planner;
