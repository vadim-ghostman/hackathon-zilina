"use client";

import { useRouter } from "next/navigation";
import Footer from "./components/footer";
import Header from "./components/header";
import { useState } from "react";
import Sidebar from "./components/sidebar";

const Button = ({ text }: { text: string }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {router.push('/planner');}}
      className="flex cursor-pointer flex-col items-center w-full text-white rounded-[10px] py-[10px] bg-aquablue text-[18px] font-bold shadow-[0_2px_4px_rgba(0,0,0,0.25)]"
    >
      {text}
    </div>
  );
}

const News = ({ datum, title, read, path }: { path: string, datum: string, title: string, read: string }) => {
  return (
    <div className="flex flex-col rounded-[10px] overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.25)] border border-[#d9d9d9]">
      <div className="bg-cover w-full h-[100px]" style={{ backgroundImage: `url("${path}")` }}/>
      <div className="flex flex-col gap-[5px] p-5">
        <div className="text-[12px] flex gap-2 items-center">
          <p className="font-bold uppercase text-pomaranc">Sport</p>
          <div className="size-1 rounded-[1px] bg-[#d9d9d9]"/>
          <p className="text-[#808080]">{datum}</p>
          <div className="size-1 rounded-[1px] bg-[#d9d9d9]"/>
          <p className="text-[#808080]">{read}</p>
        </div>
        <h3 className="font-bold text-base">{title}</h3>
      </div>
    </div>
  );
}

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }
  return (
    <div className="flex flex-col font-montserrat justify-between min-h-screen">
      <Header toggleSidebar={toggleSidebar} isSidebar={sidebarOpen}/>
      {sidebarOpen && <Sidebar/>}
      <div className="flex grow-1 flex-col gap-5">
        <div className="bg-[url('/hero.jpg')] w-full h-[300px] flex flex-col justify-end px-5 py-5 text-[whitesmoke]">
          <h2 className="font-semibold text-[32px]">Boli vyhlásení víťazi</h2>
          <p className="text-[18px]">V regióne Kysuce sa konala súťaž o najlepšiu fotografiu regiónu</p>
        </div>
        <div className="flex flex-col px-5 gap-5">
          <Button text="Chcete naplánovať dovolenku?"/>
          <p className="font-bold text-[24px] text-black">Aktuality</p> {/* <span className="text-aquablue">Čierneho</span> */}
          {!sidebarOpen &&
          <div className="flex flex-col gap-5">
            <News title="Železničiari budujú na Kysuciach náročné technické dielo" datum="11.04.2025" read="3 min na citanie" path='/n1.jpg'/>
            <News title="Zverinec v Bojnej má nového obyvateľa" datum="07.04.2025" read="2 min na citanie" path='/n2.jpg'/>
          </div>}
        </div>
      </div>
      <div className="h-[60px] w-full"/>
      {/* <Footer /> */}
    </div>
  );
}
