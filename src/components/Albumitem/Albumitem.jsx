import React from "react";
import { useNavigate } from "react-router-dom";

const Albumitem = ({ name, image, desc, id }) => {
  const navigate = useNavigate();

  return (
    <div
      className="hover:bg-[#ffffff26] p-2 px-3 cursor-pointer min-w-[180px] rounded"
      onClick={() => navigate(`/album/${id}`)}
    >
      <img className="rounded " src={image} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm ">{desc}</p>
    </div>
  );
};

export default Albumitem;
