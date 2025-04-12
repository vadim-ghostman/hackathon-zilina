import React, { useState } from 'react';
import Back from '../../public/back.svg';
import Next from '../../public/next.svg';
import Datestart from '../../public/datestart.svg';
import Clock from '../../public/clock.svg';
import Timer from '../../public/timer.svg';
import Dateend from '../../public/datestart.svg';
import Right_Arrow from '../../public/right-arrow.svg';
import Filter from '../../public/filter.svg';
import Cancel from '../../public/cancel.svg';
import Star from '../../public/star.svg';
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
    <div className='px-5'>
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
    <div className='px-5'>
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
    <div className='px-5'>
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
  });

  const items = [
    "🍔 Jedlo a nápoje",
    "🚵‍ Dobrodružstvo",
    "🎓 Vzdelávanie",
    "🏝 Pláž",
    "🏊 Bazén",
    "😌 Relax",
    "🏕 Kemp"
  ]

  return (
    <div className='px-5'>
      <h1 className='font-semibold text-[30px] mt-7'>Záujmy</h1>
      <div className='flex flex-col gap-3 mt-4'>
        {Object.keys(choosen).map((item, idx) => (
          <ListItem centered={true} key={item} choosen={choosen[item]} text={items[idx]} description={item} onclick={() => { setChoosen({...choosen, [item]: !choosen[item]}); setInterestsChoosen(true) }} />
        ))}
        <div className='flex flex-col justify-center w-full p-4 rounded-[10px] bg-white border border-pomaranc text-pomaranc transition-colors duration-300'>
          <p className='text-center font-medium text-[20px]'>Chcete pridať niečo navyše?</p>
        </div>
      </div>
    </div>
  )
}

const NextButton = ({ text, setScreenIdx, screenIdx }: { text: string, setScreenIdx: (n: number) => void, screenIdx: number }) => {
  return (
    <div className='px-5'>
      <div
        onClick={() => {setScreenIdx(screenIdx + 1);}}
        className="flex cursor-pointer flex-col items-center w-full justify-self-end text-white rounded-[10px] py-[20px] bg-aquablue text-[20px] font-bold shadow-[0_2px_4px_rgba(0,0,0,0.25)]"
      >
        {text}
      </div>
    </div>
  );
}

const UpCard = ({ text, description, rating, price, path }: { path: string, text: string, description: string, rating: string, price: number }) => {
  return (
    <div className='flex w-[160px] flex-col rounded-[10px] bg-white border border-[#d9d9d9] transition-colors duration-300 shadow-[0_2px_4px_rgba(0,0,0,0.25)]'>
      <div className='size-[160px] rounded-t-[10px] bg-cover' style={{ backgroundImage: `url("${path}")` }}></div>
      <div className='flex flex-col p-2 justify-between grow-1'>
        <div>
          <p className='font-semibold text-[14px]'>{text}</p>
          <p className='text-[10px] text-[#6c757d]'>{description}</p>
          <div className='flex gap-1'>
            <Star className='icon' width={15} height={15} />
            <p className='text-[12px] text-[#6c757d]'>{rating}</p>
          </div>
        </div>
        <p className='text-[12px] mt-2'>Start from €{price}</p>
      </div>
    </div>
  );
}

const HotelCard = ({ text, description, rating, price, path }: { path: string, text: string, description: string, rating: string, price: number }) => {
  return (
    <div className='flex rounded-[10px] items-center gap-[5px] bg-white border border-[#d9d9d9] transition-colors duration-300 shadow-[0_2px_4px_rgba(0,0,0,0.25)] p-[5px]'>
      <div className='size-[100px] rounded-[10px] shrink-0 bg-cover' style={{ backgroundImage: `url("${path}")` }}></div>
      <div className='flex flex-col gap-4 items-center w-full px-[10px]'>
        <div className='flex flex-col w-full gap-[2px]'>
          <p className='font-semibold text-base'>{text}</p>
          <p className='text-[14px] text-[#6c757d]'>{description}</p>
        </div>
        <div className='flex w-full justify-between'>
          <div className='flex gap-1'>
            <Star className='icon' width={15} height={15} />
            <p className='text-[14px] text-[#6c757d]'>{rating}</p>
          </div>
          <p className='text-[14px]'>€{price}/noc</p>
        </div>
      </div>
    </div>
  );
}

const HotelsRecommendation = () => {
  return (
    <div className='flex gap-5 flex-col'>
      <div className='flex px-5 py-5 gap-3 mt-5 overflow-x-scroll scroll-auto no-scrollbar'>
        <UpCard path="/h1.jpg" text="Mount Bromo" description='Volcano in East Java' price={150} rating='4.9'/>
        <UpCard path="/h2.jpg" text="Labengki Sombori" description='Islands in Sulawesi' price={250} rating='4.8'/>
        <UpCard path="/h3.jpg" text="Sailing Komodo" description='Labuan Bajo' price={200} rating='4.8'/>
      </div>
      <div className='flex text-[18px] font-semibold px-5'>
        <p>Odporucane hotely</p>
      </div>
      <div className='flex flex-col px-5 gap-4'>
        <HotelCard path="/h4.jpg" text="Swiss-Belhotel Rainforest Kuta" description='Jl. Sunset Road No. 101, Skalite' price={150} rating='4.9'/>
        <HotelCard path="/h5.jpg" text="Swiss-Belhotel Rainforest Kuta" description='Jl. Sunset Road No. 101, Skalite' price={150} rating='4.9'/>
        <HotelCard path="/h6.jpg" text="Swiss-Belhotel Rainforest Kuta" description='Jl. Sunset Road No. 101, Skalite' price={150} rating='4.9'/>
      </div>
    </div>
  );
}

const TripElement = ({ text, times, path }: { text: string, times: string, path: string }) => {
  const [toClose, setToClose] = useState(false);
  return (
    <div className='flex items-center'>
      <div onClick={() => setToClose(!toClose)} className='transition-all duration-300 flex flex-col w-full bg-white border border-[#d9d9d9] rounded-[15px] overflow-hidden'>
        <div className='h-[50px] w-full bg-cover' style={{ backgroundImage: `url("${path}"` }}/>
        <div className='flex flex-col px-3 py-2'>
          <div className='flex justify-between items-center w-full'>
            <p className='font-bold text-[18px]'>{text}</p>
            <div className='flex gap-1'>
              <Timer className='icon' width={15} height={15} />
              <Clock className='icon' width={15} height={15} />
            </div>
          </div>
          <p className='text-[14px] text-[#6c757d]'>{times}</p>
        </div>
      </div>
      {toClose && <div className='h-[80px] w-[50px] bg-[#F51010] rounded-r-[10px] flex items-center justify-center'>
        <Cancel />
      </div>}
    </div>
  );
}

const ChooseVehicleElement = () => {
  return (
    <div className='flex items-center justify-center border-2 border-dashed py-5 rounded-[15px] bg-white border-[#a8a8a8] text-[#a8a8a8] text-base'>
      Ťuknite a vyberte si spôsob prepravy
    </div>
  )
}

const TripDetails = () => {
  const [choosen, setChoosen] = React.useState(0);
  const days = {
    "1": "13 Apr 2025",
    "2": "14 Apr 2025",
    "3": "15 Apr 2025",
  }

  return (
    <div className='px-5'>
      <h1 className='font-semibold text-[30px] mt-7'>Detaily výletu</h1>
      <div className='flex mt-4 w-full justify-between'>
        {Object.keys(days).map((day, idx) => (
          choosen == idx ? (
            <div key={idx} className='flex flex-col gap-[2px] w-full items-center justify-center px-3 py-2 bg-white border-b-2 border-aquablue transition-colors duration-300' onClick={() => {setChoosen(idx)}}>
              <p className='font-bold text-[18px] text-aquablue'>Deň {day}</p>
              <p className='text-[14px] text-aquablue'>{days[day as keyof typeof days]}</p>
            </div>
          ) : (
            <div key={idx} className='flex flex-col gap-[2px] w-full items-center justify-center px-3 py-2 border-b-1 border-[#d9d9d9] bg-white transition-colors duration-300' onClick={() => {setChoosen(idx)}}>
              <p className='font-bold text-[18px]'>Deň {day}</p>
              <p className='text-[14px] text-[#6c757d]'>{days[day as keyof typeof days]}</p>
            </div>
        )))}
      </div>
      <div className='flex gap-3 w-full justify-between'>
        <div className='flex flex-col w-min mt-5 justify-around'>
          <div className='flex items-center justify-center bg-aquablue rounded-full size-8'>1</div>
          <div className='flex size-8 opacity-0'>-</div>
          <div className='flex items-center justify-center text-white bg-[#a8a8a8] rounded-full size-8'>2</div>
          <div className='flex size-8 opacity-0'>-</div>
          <div className='flex items-center justify-center text-white bg-[#a8a8a8] rounded-full size-8'>3</div>
          <div className='flex size-8 opacity-0'>-</div>
          <div className='flex items-center justify-center text-white bg-[#a8a8a8] rounded-full size-8'>4</div>
          <div className='flex size-8 opacity-0'>-</div>
        </div>
        <div className='flex flex-col gap-4 mt-5 w-full'>
          <TripElement path="/t1.jpg" text="Mount Bromo" times="8:00 - 10:00"/>
          <ChooseVehicleElement/>
          <TripElement path="/t2.jpg" text="Labengki Sombori" times="12:00 - 14:00"/>
          <ChooseVehicleElement/>
          <TripElement path="/t3.jpg" text="Sailing Komodo" times="16:00 - 18:00"/>
          <ChooseVehicleElement/>
          <TripElement path="/t4.jpg" text="Mount Bromo" times="8:00 - 10:00"/>
          <ChooseVehicleElement/>
        </div>
      </div>
    </div>
  );
}

const Planner = () => {
  const [choosen, setChoosen] = React.useState(0);
  const [screenIdx, setScreenIdx] = React.useState(0);
  const [interestsChoosen, setInterestsChoosen] = React.useState(false);
  const router = useRouter();

  return (
    <div className='flex flex-col min-h-screen pt-5 pb-10 justify-between gap-5'>
      <div>
        <div className='flex justify-between px-5'>
          <div
            onClick={() => {router.push('/');}}
            className='flex size-10 items-center justify-center rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.25)] bg-white border border-[#d9d9d9]'
          >
            <Back className='icon' width={12} height={24} />
          </div>
          {screenIdx == 4 && <div
            className='flex size-10 items-center justify-center rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.25)] bg-white border border-[#d9d9d9]'
          >
            <Filter className='icon' width={24} height={24} />
          </div>}
        </div>
        {screenIdx == 0 && <WhoGoesScreen choosen={choosen} setChoosen={setChoosen} />}
        {screenIdx == 1 && <ChooseDateScreen/>}
        {screenIdx == 2 && <ChooseBudgetScreen/>}
        {screenIdx == 3 && <ChooseInterestsScreen setInterestsChoosen={setInterestsChoosen}/>}
        {screenIdx == 4 && <HotelsRecommendation/>}
        {screenIdx == 5 && <TripDetails/>}
      </div>

      {(choosen !== 0 && screenIdx === 0) ||
        (screenIdx === 1) ||
        (screenIdx === 2) ||
        (screenIdx === 3 && interestsChoosen) ? (
        <NextButton setScreenIdx={setScreenIdx} screenIdx={screenIdx} text="Pokračovať"/>
      ) : null}

      {screenIdx === 4 ? (
        <NextButton setScreenIdx={setScreenIdx} screenIdx={screenIdx} text="Vytvorte si unikátny výlet"/>
      ) : null}
    </div>
  );
}

export default Planner;
