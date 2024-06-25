import React from "react";
import vectorcloud from "/Vectorcloud.svg";
const CloudCardCash = () => {
  return (
    <div className="relative w-[100%]  h-[190px] bg-[#1C7EBF]  rounded-3xl px-4 py-2 flex flex-col justify-between items-center shadow-[0px_14px_17px_15px_#00000024]">
      <div className="w-full flex flex-col items-start">
        <h1 className="text-white text-lg font-bold tracking-widest">
          CloudCash
        </h1>
        <p className="text-[#76B1D9] text-xs font-bold tracking-tight">
          PREMIUM ACCOUNT
        </p>
      </div>
      <div className="text-white w-full flex items-center gap-12 justify-start text-2xl tracking-wide">
        5789&ensp;****&ensp;****&ensp;2847
      </div>
      <div className="w-full flex items-center gap-12">
        <div>
          <p className="text-white text-[10px] ">Card holder</p>
          <h1 className="text-white text-base ">Mike Smith</h1>
        </div>
        <div>
          <p className="text-white text-[10px] ">Expire date</p>
          <h1 className="text-white text-base">06/21</h1>
        </div>
      </div>

      <img className="absolute bottom-0 right-0" src={vectorcloud} alt="" />
    </div>
  );
};

export default CloudCardCash;
