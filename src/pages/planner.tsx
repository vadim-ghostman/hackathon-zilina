import React from 'react';
import Back from '../../public/back.svg';
import Next from '../../public/next.svg';
import Datestart from '../../public/datestart.svg';
import Dateend from '../../public/datestart.svg';
import Right_Arrow from '../../public/right-arrow.svg';
import Rane from '../../public/rane.svg';
import '../app/globals.css'
import { useRouter } from 'next/navigation';

const ListItem = ({ centered, text, description, choosen, onclick }: { centered?: boolean, onclick: () => void, text: string, description: string, choosen?: boolean }) => {
  return !choosen ? (
    <div className='flex flex-col justify-center w-full p-4 rounded-[10px] bg-white border border-[#d9d9d9] transition-colors duration-300' onClick={onclick}>
      {!centered ? (
        <>
          <p className='font-bold text-[18px]'>{text}</p>
          <p className='text-[18px]'>{description}</p>
        </>
      ) : (
        <p className='text-center font-medium text-[20px]'>{text}</p>
      )}
    </div>
    ) : (
    <div className='flex flex-col justify-center w-full p-4 rounded-[10px] bg-white border border-aquablue text-aquablue transition-colors duration-300' onClick={onclick}>
      {!centered ? (
        <>
          <p className='font-bold text-[18px]'>{text}</p>
          <p className='text-[18px]'>{description}</p>
        </>
      ) : (
        <p className='text-center font-medium text-[20px]'>{text}</p>
      )}
    </div>
  );
}

const WhoGoesScreen = ({ choosen, setChoosen }: { choosen: number, setChoosen: (n: number) => void }) => {
  return (
    <div>
      <h1 className='font-semibold text-[30px] mt-7'>Kto ide?</h1>
      <h2 className='font-bold text-base mt-3'>Vyberte si cestujúcich</h2>
      <div className='flex flex-col gap-3 mt-5'>
        <ListItem onclick={() => {setChoosen(1)}} choosen={choosen == 1} text="Len ja" description="Osamelý cestovateľ na prieskume"/>
        <ListItem onclick={() => setChoosen(2)} choosen={choosen == 2} text="Pár" description="Dvaja cestovatelia v tandeme"/>
        <ListItem onclick={() => setChoosen(3)} choosen={choosen == 3} text="Rodina" description="Skupina zábavomilných dobrodruhov"/>
        <ListItem onclick={() => setChoosen(4)} choosen={choosen == 4} text="Priatelia" description="Skupinka hľadačov vzrušenia"/>
      </div>
    </div>
  );
}

const ChooseDateScreen = () => {
  const rows = [
    ["Ne", "Po", "Ut", "St", "Št", "Pi", "So"],
    ["27", "28", "1", "2", "3", "4", "5"],
    ["6", "7", "8", "9", "10", "11", "12"],
    ["13", "14", "15", "16", "17", "18", "19"],
    ["20", "21", "22", "23", "24", "25", "26"],
    ["27", "28", "29", "30", "31", "1", "2"],
  ]

  const startDate = new Date(2025, 4, 13);
  const endDate = new Date(2025, 4, 16)

  return (
    <div>
      <h1 className='font-semibold text-[30px] mt-7'>Dátumy cestovania</h1>

      <div className='mt-6'>
        <div className='flex gap-8 items-center w-full justify-between px-4'>
          <div className='flex size-10 items-center justify-center rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.25)] bg-white border border-[#d9d9d9]'>
            <Back className='icon' width={12} height={24} />
          </div>

          <p className='font-medium text-[16px]'>April 2025</p>

          <div className='flex size-10 items-center justify-center rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.25)] bg-white border border-[#d9d9d9]'>
            <Next className='icon' width={12} height={24} />
          </div>
        </div>
        <div className='flex flex-col gap-2 mt-1 w-full'>
          {rows.map((row, ri) => (
            <div key={ri} className='flex justify-between w-full'>
              {row.map((day, di) => (
                <div key={di} className='flex flex-col items-center justify-center w-full p-4 rounded-full bg-white transition-colors duration-300'
                  style={{ backgroundColor: day == startDate.getDate().toString() ? 'var(--aquablue)' : (day == endDate.getDate().toString() ? 'var(--pomaranc)' : '#ffffff') }}>
                  {(ri == 1 && di < 2) || (ri == 5 && di >= 5) ? (
                    <p className='font-bold text-gray-500 text-[16px]'>{day}</p>
                  ) : (
                    <p className='font-bold text-[16px]'>{day}</p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        <hr />
        <div className='flex justify-between items-center w-full py-5'>
          <div className='flex gap-2'>
            <Datestart/>
            <div className='flex flex-col gap-[2px]'>
              <p className='text-[14px] font-medium'>13. april 2025</p>
              <p className='text-[14px] text-[#403d3d]'>Začiatok</p>
            </div>
          </div>
          <Right_Arrow/>
          <div className='flex gap-2'>
            <Dateend/>
            <div className='flex flex-col gap-[2px]'>
              <p className='text-[14px] font-medium'>16. april 2025</p>
              <p className='text-[14px] text-[#403d3d]'>Koniec</p>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

const ChooseBudgetScreen = () => {
  const [choosen, setChoosen] = React.useState(0);

  return (
    <div>
      <h1 className='font-semibold text-[30px] mt-7'>Rozpočet</h1>
      <p className='font-bold text-[18px] mt-[15px]'>Cenové rozpätie</p>
      <p className='text-[14px] mt-[4px] mb-[24px]'>Priemerná cena za noc je €350</p>
      <Rane/>
      <div className='flex justify-between items-center w-full py-5 gap-3'>
        <div className='flex flex-col gap-2 w-full'>
          <p className='text-[#404040] text-[14px]'>Minimum</p>
          <input value="€200" type="text" className='w-full outline-none ring-1 ring-[#d9d9d9] text-[18px] font-medium focus:ring-aquablue px-4 py-3 rounded-[10px]'/>
        </div>

        <div className='flex flex-col gap-2 w-full'>
          <p className='text-[#404040] text-[14px]'>Maximum</p>
          <input value="€520" type="text" className='w-full outline-none ring-1 ring-[#d9d9d9] text-[18px] font-medium focus:ring-aquablue px-4 py-3 rounded-[10px]'/>
        </div>
      </div>

      <p className='font-bold text-base'>Zvoľte spôsob výdavkov pre vašu cestu</p>
      <div className='flex flex-col gap-3 mt-5'>
        <ListItem text="Lacné" description="Dávať pozor na výdavky" choosen={choosen == 0} onclick={() => setChoosen(0)}/>
        <ListItem text="Stredné" description="Udržať náklady na priemernej úrovni" choosen={choosen == 1} onclick={() => setChoosen(1)}/>
        <ListItem text="Luxusné" description="Nerobte si starosti — užívajte si život!" choosen={choosen == 2} onclick={() => setChoosen(2)}/>
      </div>
    </div>
  )
}

interface InterestsState {
  [key: string]: boolean;
}

const ChooseInterestsScreen = ({ setInterestsChoosen }: { setInterestsChoosen: (n: boolean) => void }) => {
  const [choosen, setChoosen] = React.useState<InterestsState>({
    k0: false,
    k1: false,
    k2: false,
    k3: false,
    k4: false,
    k5: false,
    k6: false,
    k7: false,
    k8: false,
  });

  const items = [
    "🍔 Jedlo a nápoje",
    "🌃 Mestské oblasti",
    "🚵‍ Dobrodružstvo",
    "🎓 Vzdelávacie",
    "🏝 Pláž",
    "🦁 Divoká príroda",
    "🏊 Bazén",
    "😌 Relax",
    "🏕 Kemp"
  ]

  return (
    <div>
      <h1 className='font-semibold text-[30px] mt-7'>Záujmy</h1>
      <div className='flex flex-col gap-3 mt-4'>
        {Object.keys(choosen).map((item, idx) => (
          <ListItem centered={true} key={item} choosen={choosen[item]} text={items[idx]} description={item} onclick={() => { setChoosen({...choosen, [item]: !choosen[item]}); setInterestsChoosen(true) }} />
        ))}
      </div>
    </div>
  )
}

const NextButton = ({ setScreenIdx, screenIdx }: { setScreenIdx: (n: number) => void, screenIdx: number }) => {
  return (
    <div
      onClick={() => {setScreenIdx(screenIdx + 1);}}
      className="flex cursor-pointer flex-col items-center w-full justify-self-end text-white rounded-[10px] py-[20px] bg-aquablue text-[20px] font-bold shadow-[0_2px_4px_rgba(0,0,0,0.25)]"
    >
      Pokračovať
    </div>
  );
}

const Planner = () => {
  const [choosen, setChoosen] = React.useState(0);
  const [screenIdx, setScreenIdx] = React.useState(0);
  const [interestsChoosen, setInterestsChoosen] = React.useState(false);
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
        {screenIdx == 0 && <WhoGoesScreen choosen={choosen} setChoosen={setChoosen} />}
        {screenIdx == 1 && <ChooseDateScreen/>}
        {screenIdx == 2 && <ChooseBudgetScreen/>}
        {screenIdx == 3 && <ChooseInterestsScreen setInterestsChoosen={setInterestsChoosen}/>}
      </div>

      {(choosen !== 0 && screenIdx === 0) ||
       (screenIdx === 1) ||
       (screenIdx === 2) ||
       (screenIdx === 3 && interestsChoosen) ? (
        <NextButton setScreenIdx={setScreenIdx} screenIdx={screenIdx} />
      ) : null}
    </div>
  );
}

export default Planner;
