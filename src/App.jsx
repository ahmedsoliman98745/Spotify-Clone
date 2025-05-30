import React, { useContext } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Player from "./components/Player/Player";
import Display from "./components/Display/Display";
import { PlayerContext } from "./context/PlayerContext";
export default function App() {
  const { audioRef, track } = useContext(PlayerContext);
  return (
    <>
      <div className=" h-screen bg-black  ">
        <div className="h-[90%] flex ">
          <Sidebar />
          <Display />
        </div>
        <Player />
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
      </div>
    </>
  );
}
