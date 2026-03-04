import React from "react";

const Banner = ({ problems, solved }) => {
  const victor1 = "https://i.ibb.co.com/1tNhfgxf/vector1.png";

  return (
    <div className="w-full mx-auto flex flex-col gap-8 md:flex-row justify-between m-14 md:w-11/12 ">
      {/* Left side is complet alhamdulilah  */}
      <div className="relative w-96   md:w-1/2 mx-auto h-60 rounded-2xl overflow-hidden text-white">
        <div className="absoulate inset-0 bg-gradient-to-r from-[#642fe3] via-[#8148eb] to-[#8e53ee]">
          <img
            src={victor1}
            className="pointer-events-none absolute left-0 top-0 h-full w-1/2 object-cover opacity-25"
            alt=""
            srcset=""
          />
          <img
            src={victor1}
            className="pointer-events-none absolute right-0 top-0 h-full w-1/2 object-cover opacity-25 scale-x-[-1]"
            alt=""
          />
          <div className="relative z-10 flex h-60  flex-col items-center justify-center text-center">
            <h1 className="font-semibold text-3xl">In-Progress</h1>
            <p className="font-bold text-6xl mt-2">{problems.length}</p>
          </div>
        </div>
      </div>

      {/*Banner Right section side is start Now    */}
     <div className="relative w-96  md:w-1/2 mx-auto h-60 rounded-2xl overflow-hidden text-white">
        <div className="absoulate inset-0 bg-gradient-to-r from-[#54cf68] via-[#25a472] to-[#0e8e77] text-white">
          <img
            src={victor1}
            className="pointer-events-none absolute left-0 top-0 h-full w-1/2 object-cover opacity-25"
            alt=""
            srcset=""
          />
          <img
            src={victor1}
            className="pointer-events-none absolute right-0 top-0 h-full w-1/2 object-cover opacity-25 scale-x-[-1]"
            alt=""
          />
          <div className="relative z-10 flex h-60  flex-col items-center justify-center text-center">
            <h1 className="font-semibold text-3xl">Resolved</h1>
            <p className="font-bold text-6xl mt-2">{solved.length}</p>
          </div>
        </div>
      </div>
  {/*Banner Right section side is end   */}
      
    </div>
  );
};

export default Banner;
//   <div className="">
// <div className="absolute " />
