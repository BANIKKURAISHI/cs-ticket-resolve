import React from "react";

const Banner = () => {

  return (
    <div  className="w-11/12  mx-auto flex flex-col gap-8 md:flex-row justify-between m-14">
     
      <div className="flex-1 bg-gradient-to-r from-[#642fe3] via-[#8148eb] to-[#8e53ee] text-white ">
        <div  className="flex h-60 flex-col items-center justify-center text-center">
          <h1 className="font-semibold text-3xl">In-Progress</h1>
          <p className="font-bold text-4xl">0</p>
        </div>
      </div>

      <div className="w-1/2 h-60 border-2  bg-gradient-to-r from-[#54cf68] via-[#25a472] to-[#0e8e77] text-white ">
        <div className="flex h-60 flex-col items-center justify-center text-center">
          <h1 className="font-semibold text-3xl">Resolved</h1>
          <p className="font-bold text-4xl">0</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
