import React from "react";

const SummaryStatsCard = ({ img, title, ammount }) => {
  return (
    <div className="h-[160px]  px-4 py-4 flex flex-col justify-between rounded-3xl shadow-[0px_10px_45px_0px_#00000024]">
      <div className="w-full flex flex-col justify-between mr-16">
        <p className="text-black text-xl font-semibold">${ammount} </p>
        <p className="text-[#AEAEAE] font-semibold">12/20/20</p>
      </div>
      <div>
        <img src={img} alt="" />
        <p className="text-lg ">{title} </p>
      </div>
    </div>
  );
};

export default SummaryStatsCard;
