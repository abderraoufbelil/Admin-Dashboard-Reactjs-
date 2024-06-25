import React from "react";
import testAccount from "/TestAccount.svg";
const Contactoption = ({ img, name }) => {
  return (
    <div className="flex flex-col items-center justify-start">
      <span className="rounded-full w-[40px] h-[40px]">
        <img src={img ? img : testAccount} alt="" />
      </span>
      <p className="">{name}</p>
    </div>
  );
};

export default Contactoption;
