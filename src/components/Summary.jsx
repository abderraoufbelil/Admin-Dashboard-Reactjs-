import React from "react";
import OverviewCards from "./OverviewCards";
import OverviewTransactions from "./OverviewTransactions";
import SummaryStatsCard from "./SummaryStatsCard";
import Usermenu from "./Usermenu.jsx";
import maki_mountain16 from "/maki_mountain-16.svg";
import maki_mountain15 from "/maki_mountain-15.svg";
import maki_mountain17 from "/maki_mountain-17.svg";
import Outcomestatline from "./Outcomestatline.jsx";
import vehicle from "/vehicle.svg";
import plane from "/plane.svg";
import shoppingcart from "/shoppingcart.svg";
import Contactoption from "./Contactoption.jsx";
import dollar from "/Vector22.svg";
import dollars from "/Vector33.svg";
import cloudshape from "/Group128.svg";
import cloudshapes from "/Group130.svg";
const statscard = [
  { img: maki_mountain15, title: "Holidays", ammount: "550" },
  { img: maki_mountain17, title: "Holidays", ammount: "550" },
  { img: maki_mountain16, title: "Holidays", ammount: "550" },
];
const outcomecards = [
  {
    img: shoppingcart,
    completedpr: 52,
    text: "Shopping",
    ammount: "550",
    color: "#F99C57",
  },
  {
    img: vehicle,
    completedpr: 21,
    text: "Electronics",
    ammount: "550",
    color: "#26B04D",
  },
  {
    img: plane,
    completedpr: 74,
    text: "Travels",
    ammount: "550",
    color: "#70A6E8",
  },
];
const Summary = () => {
  return (
    <div className="h-full   flex flex-col  gap-4 pl-8 pr-4  py-4">
      <Usermenu />
      <h1 className="font-bold text-xl">Goals</h1>
      <div className="w-full flex items-center justify-center gap-8">
        {statscard.map((item, index) => (
          <SummaryStatsCard {...item} key={index} />
        ))}
      </div>
      <h1 className="font-bold text-xl">Outcome statistics</h1>
      <div className="w-full flex flex-col items-center gap-6">
        {outcomecards.map((item, index) => (
          <Outcomestatline key={index} {...item} />
        ))}
      </div>
      <div className="w-full flex gap-4">
        <div className="rounded-3xl flex flex-col gap-2 shadow-[0px_10px_45px_0px_#00000024] px-4 py-2 w-[70%]">
          <h1 className="font-bold text-xl">New transaction</h1>
          <div className="flex gap-2 items-center justify-center ">
            <Contactoption name="Herald" />
            <Contactoption name="Herald" />
            <Contactoption name="Herald" />
            <Contactoption name="Herald" />
            <Contactoption name="Herald" />
            <Contactoption name="Herald" />
            <Contactoption name="Herald" />
          </div>
          <div className="w-full flex justify-between">
            <input
              className="px-4 w-[55%] border-2 rounded-lg h-10 border-[#70A6E8] outline-none "
              type="number"
            />
            <button className="px-2 w-[40%]   font-bold rounded-xl bg-[#FFC145] h-10 outline-none text-nowrap">
              {" "}
              Send the transfer
            </button>
          </div>
        </div>
        <div className="relative overflow-x-hidden rounded-3xl flex flex-col justify-end gap-2 shadow-[0px_10px_45px_0px_#00000024] bg-[#E06048] px-4 py-2 flex-grow">
          <img
            className="absolute bottom-16 right-16"
            src={cloudshape}
            alt=""
          />
          <img className="absolute top-0 left-[-15px]" src={dollar} alt="" />
          <img className="absolute top-0 right-8 " src={dollars} alt="" />
          <img className="absolute bottom-10   " src={cloudshapes} alt="" />
          <p className="z-20 text-white font-semibold text-lg leading-[20px]">
            Get great <br /> loan
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
