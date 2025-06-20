import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { PlayerContext } from "../../context/PlayerContext";
const Player = () => {
  const {
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    audioRef,
    track,
    time,
    next,
    previos,
    seekSong,
  } = useContext(PlayerContext);
  return (
    <div className="h-[10%] flex justify-between items-center bg-black text-white px-4">
      <div className="hidden lg:flex gap-4 items-center ">
        <img src={track.image} className="w-12" alt="" />
        <div>
          <p className="">{track.name}</p>
          <p className="font-light ">{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center m-auto">
        <div className="flex gap-4">
          <img
            className="w-5 cursor-pointer"
            src={assets.shuffle_icon}
            alt=""
          />
          <img
            onClick={previos}
            className="w-5 cursor-pointer"
            src={assets.prev_icon}
            alt=""
          />
          {playStatus ? (
            <img
              onClick={pause}
              className="w-5 cursor-pointer"
              src={assets.pause_icon}
              alt=""
            />
          ) : (
            <img
              onClick={play}
              className="w-5 cursor-pointer"
              src={assets.play_icon}
              alt=""
            />
          )}

          <img
            onClick={next}
            className="w-5 cursor-pointer"
            src={assets.next_icon}
            alt=""
          />
          <img className="w-5 cursor-pointer" src={assets.loop_icon} alt="" />
        </div>
        <div className="flex items-center gap-5">
          <p>
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div
            ref={seekBg} 
            onClick={seekSong}
            className="bg-gray-300 h-1 rounded-full cursor-pointer w-[60vw] max-w-[500px] "
          >
            {" "}
            <hr
              ref={seekBar}
              className="h-1 rounded-full border-none bg-green-800 w-[0]"
            />
          </div>
          <p>
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>
      <div className="hidden lg:flex gap-2 items-center opacity-75 ">
        <img className="w-4" src={assets.plays_icon} alt="" />
        <img className="w-4" src={assets.mic_icon} alt="" />
        <img className="w-4" src={assets.queue_icon} alt="" />
        <img className="w-4" src={assets.speaker_icon} alt="" />
        <img className="w-4" src={assets.volume_icon} alt="" />
        <div className="bg-slate-50 h-1 rounded w-20"></div>
        <img className="w-4" src={assets.mini_player_icon} alt="" />
        <img className="w-4" src={assets.zoom_icon} alt="" />
      </div>
    </div>
  );
};

export default Player;
