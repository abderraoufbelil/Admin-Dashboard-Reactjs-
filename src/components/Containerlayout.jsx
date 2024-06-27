import React from "react";

const Containerlayout = ({ color, height, children }) => {
  return (
    <div className=" relative w-full h-full flex justify-center items-center    p-0 ">
      {children}
    </div>
  );
};

export default Containerlayout;
