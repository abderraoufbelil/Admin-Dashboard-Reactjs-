import React from "react";
import OverviewCards from "./OverviewCards";
import OverviewTransactions from "./OverviewTransactions";

const Feed = () => {
  return (
    <div className="h-full w-[calc((100%-17%)/2)] flex flex-col items-center gap-4 pl-8 pr-4  py-4">
      <div className="w-full flex flex-col gap-2  ">
        <h1 className="text-4xl text-[#404040] font-bold">Weekly sumup</h1>
        <p>Get summary of your weekly transactions</p>
      </div>

      <OverviewCards />

      <OverviewTransactions />
    </div>
  );
};

export default Feed;
