import React from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-full w-[25%] flex-col lg:flex text-white hidden gap-2 p-2">
        <div className="h-[15%] flex flex-col justify-around rounded bg-[#121212]">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="flex items-center gap-3 pl-8 cursor-pointer"
          >
            <img src={assets.home_icon} className="w-6" alt="" />
            <p className="font-bold ">Home</p>
          </div>
          <div className="flex items-center gap-3 pl-8 cursor-pointer">
            <img src={assets.search_icon} className="w-6" alt="" />
            <p className="font-bold ">Search</p>
          </div>
        </div>
        <div className="h-[85%] rounded bg-[#121212]">
          <div className="flex justify-between items-center p-4">
            <div className="flex items-center gap-3">
              <img src={assets.stack_icon} className="w-8 " alt="" />
              <h1 className="p-2 font-semibold">Your Library</h1>
            </div>
            <div className="flex items-center gap-3">
              <img src={assets.plus_icon} className="w-5 " alt="" />
              <img src={assets.arrow_icon} className="w-5" alt="" />
            </div>
          </div>
          <div className="flex flex-col justify-start items-start bg-[#242424] gap-1 p-4 m-2 rounded font-semibold ">
            <h1>Create Your First playlist</h1>
            <p className="font-light">it's easy we will help you</p>
            <button className="rounded-full bg-white text-black py-1.5 px-4 mt-4 text-[15px]">
              Create Playlist
            </button>
          </div>
          <div className="bg-[#242424] p-4 m-2 flex flex-col items-start justify-start gap-1 font-semibold rounded ">
            <h1>Let's Find Some Podcasts To Follow</h1>
            <p className="font-light">we'll keep you update on new episodes</p>
            <button className="py-1.5 px-4 rounded-full text-black bg-white text-[15px] mt-4">
              Browse Podcasts
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
