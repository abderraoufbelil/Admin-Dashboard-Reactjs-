import React from "react";

const TransactionLine = ({ item, title }) => {
  return title ? (
    <div className="w-full flex justify-between items-center mb-2">
      <p className="text-[#AEAEAE] w-36 ">{item?.receiver} </p>
      <p className="text-[#AEAEAE] w-36 ">{item?.type} </p>
      <p className="text-[#AEAEAE] w-36 ">{item?.date} </p>
      <p className="text-[#AEAEAE] w-16 ">{item?.amount} </p>
    </div>
  ) : (
    <div className="w-full flex justify-between items-center border-b-[1px] py-2">
      <p className="text-[##454545] text-sm w-36 font-semibold ">
        {item?.receiver}{" "}
      </p>
      <p className="text-[#AEAEAE] text-sm w-36 ">{item?.type} </p>
      <p className="text-[#AEAEAE] text-sm w-36  ">{item?.date} </p>
      <p className="text-[#454545] text-sm w-16 font-semibold ">
        {item?.amount}{" "}
      </p>
    </div>
  );
};

export default TransactionLine;
