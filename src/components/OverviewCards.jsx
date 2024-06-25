import React from "react";
import cardsimg from "/Group110.svg";
import CloudCardCash from "./CloudCardCash";
import ProgressBar from "@ramonak/react-progress-bar";
import { Toggle } from "react-toggle-component";
const OverviewCards = () => {
  return (
    <div className="w-full rounded-xl h-[350px]  shadow-[0px_10px_45px_0px_#00000024] px-8 py-2 flex flex-col gap-2 ">
      <h1 className="font-bold text-xl">Cards</h1>
      <div className="flex  ">
        <div className="w-[60%]  flex flex-col gap-4 mr-8">
          <div className="w-full flex flex-col gap-4">
            <CloudCardCash />
            <ProgressBar
              margin="0px 0px 0px 5px"
              height="10px"
              bgColor="#1C7EBF"
              baseBgColor="#F1F1F1"
              customLabel=" "
              completed={20}
            />
            <div className="flex justify-between">
              <p className="text-[#AEAEAE] font-semibold">
                weekly payment limit
              </p>{" "}
              <p className="text-black font-semibold">$350.60/$4000</p>
            </div>
          </div>
        </div>
        <div className="h-[200px] w-[1px] bg-[#dedcdc] mr-8"></div>
        <div className="flex flex-grow flex-col gap-2">
          <div className="flex flex-col items-end">
            <p className="text-[#197BBD] text-3xl font-bold">$2850.75</p>
            <p className="text-[#AEAEAE] font-semibold">Current balance</p>
          </div>
          <div className="flex flex-col  items-end">
            <p className="text-[#499D8A] text-2xl font-semibold">$1500.50</p>
            <p className="text-[#AEAEAE] font-semibold">Income</p>
          </div>
          <div className="flex flex-col  items-end">
            <p className="text-[#BD4B37] text-xl font-semibold">$350.60</p>
            <p className="text-[#AEAEAE] font-semibold">Outcome</p>
          </div>
          <div className="flex flex-col  items-end">
            <Toggle name="toggle-1" />
            <p className="text-[#AEAEAE] font-semibold">Deactivate card</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCards;
