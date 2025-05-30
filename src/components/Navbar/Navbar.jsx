import React from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between items-center w-full font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="bg-black  rounded-2xl w-8 p-2 cursor-pointer "
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={() => navigate(1)}
            className="bg-black w-8 p-2 cursor-pointer rounded-2xl "
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4 ">
          <p className="bg-white text-black hidden md:block text-[15px] rounded-2xl px-4 py-1 cursor-pointer">
            Explore Premium
          </p>
          <p className="bg-black text-white text-[15px] rounded-2xl px-3 py-1 cursor-pointer">
            Install App
          </p>
          <p className="flex justify-center items-center bg-red-600 rounded-full w-8 h-8 cursor-pointer">
            A
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black rounded-2xl px-4 py-1 cursor-pointer">
          All
        </p>
        <p className="bg-black text-white rounded-2xl px-4 py-1 cursor-pointer">
          Music
        </p>
        <p className="bg-black text-white rounded-2xl px-4 py-1 cursor-pointer">
          Podcasts
        </p>
      </div>
    </>
  );
};

export default Navbar;
