import React, { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";

const Songitem = ({ name, image, desc, id }) => {
  const { playWithId } = useContext(PlayerContext);
  return (
    <div
      onClick={() => playWithId(id)}
      className="hover:bg-[#ffffff26] p-2 px-3 cursor-pointer min-w-[180px] rounded"
    >
      <img className="rounded " src={image} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm ">{desc}</p>
    </div>
  );
};

export default Songitem;
