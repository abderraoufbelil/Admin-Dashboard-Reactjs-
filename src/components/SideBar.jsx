import React from "react";
import cloud from "/cloud.svg";
import bottomvector from "/Group158.svg";
import frame7 from "/Frame7.svg";
import Group70 from "/Group70.png";
import Group76 from "/Group76.svg";
import Group79 from "/Group79.svg";
import Group74 from "/Group74.svg";
import Group158 from "/Group158.svg";
import Group165 from "/Group165.svg";
import Group747 from "/Group747.svg";

import { NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="py-8 h-screen w-[300px]  sticky top-0 left-0  border-r-[1px] border-slate-400 flex flex-col justify-between items-center">
      <div className="w-[80%] self-start flex gap-2 items-center justify-center">
        <img className="w-[40px] object-contain" src={cloud} alt="" />
        <h1 className="font-bold text-2xl text-[#165885]">CloudCash</h1>
      </div>
      <ul className="flex flex-col gap-2 w-full items-center">
        <NavLink
          to={"/overview"}
          className={({ isActive }) =>
            isActive ? "activelink" : "nonactivelink"
          }
        >
          <img className="w-[30px] h-[30px] " src={Group70} alt="" />
          <p className="font-bold text-[#197BBD]">Overview</p>
        </NavLink>
        <NavLink
          to={"/transactions"}
          className={({ isActive }) =>
            isActive ? "activelink" : "nonactivelink"
          }
        >
          <img className="w-[30px] h-[30px] " src={Group747} alt="" />

          <p className="font-bold text-[#197BBD]">Transactions</p>
        </NavLink>
        <NavLink
          to={"/cards"}
          className={({ isActive }) =>
            isActive ? "activelink" : "nonactivelink"
          }
        >
          <img className=" w-[30px] h-[30px]" src={Group74} alt="" />
          <p className="font-bold text-[#197BBD]">Cards</p>
        </NavLink>
        <NavLink
          to={"/invoices"}
          className={({ isActive }) =>
            isActive ? "activelink" : "nonactivelink"
          }
        >
          <img className=" w-[30px] h-[30px]" src={Group76} alt="" />
          <p className="font-bold text-[#197BBD]">Invoices</p>
        </NavLink>
        <NavLink
          to={"/goals"}
          className={({ isActive }) =>
            isActive ? "activelink" : "nonactivelink"
          }
        >
          <img className=" w-[30px] h-[30px]" src={Group165} alt="" />
          <p className="font-bold text-[#197BBD]">Goals</p>
        </NavLink>
        <NavLink
          to={"/settings"}
          className={({ isActive }) =>
            isActive ? "activelink" : "nonactivelink"
          }
        >
          <img className=" w-[30px] h-[30px]" src={Group79} alt="" />
          <p className="font-bold text-[#197BBD]">Settings</p>
        </NavLink>
      </ul>
      <div className="w-full flex flex-col gap-6  items-center">
        <img className="w-[80px] object-contain" src={bottomvector} alt="" />
        <p className="text-sm text-center">
          Give your money <br />
          awesome space in cloud
        </p>
        <button className="font-bold bg-[#FFC145] px-5 py-4 rounded-xl">
          Upgrade to premium &#129033;
        </button>
      </div>
    </div>
  );
};

export default SideBar;
