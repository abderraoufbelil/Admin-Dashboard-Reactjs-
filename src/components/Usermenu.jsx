import React from "react";
import Group167 from "/Group167.svg";
import bell from "/bell.svg";
import mail from "/mail.svg";
const Usermenu = () => {
  return (
    <div className="w-full h-[80px] px-12 py-4 flex   justify-end items-end">
      <div className="h-1/2 w-full flex justify-end items-center gap-2">
        <img className="w-[30px] h-[30px] cursor-pointer" src={mail} alt="" />
        <div>
          <img className="w-[30px] h-[30px] cursor-pointer" src={bell} alt="" />{" "}
          <span></span>
        </div>
        <img
          className="w-[40px] h-[40px] cursor-pointer"
          src={Group167}
          alt=""
        />
        <div>
          <p className="font-bold ">Andrew</p>
          <p className="text-[#AEAEAE] ">Admin account</p>
        </div>
      </div>
    </div>
  );
};

export default Usermenu;
