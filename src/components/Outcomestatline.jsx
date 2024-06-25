import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";

const Outcomestatline = ({ completedpr, img, text, color }) => {
  return (
    <div className="w-full gap-2 flex items-center px-4 ">
      <img className="w-[40px] h-[40px]" src={img} alt="" />
      <div className="flex flex-col   justify-center flex-grow mr-2">
        <div className="h-1/3">
          <ProgressBar
            margin="0px 0px 0px 5px"
            height="10px"
            customLabel=" "
            bgColor={color}
            baseBgColor="#F1F1F1"
            completed={completedpr}
          />
          <p>{text}</p>
        </div>
      </div>
      <p className="text-xl font-semibold self-start">{completedpr}%</p>
    </div>
  );
};

export default Outcomestatline;
