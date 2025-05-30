import { useEffect, useState } from "react";
import { createContext, useRef } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext(0);

const PlayerContextProvider = (props) => {
  const seekBar = useRef();
  const seekBg = useRef();
  const audioRef = useRef();
  const [track, setTrack] = useState(songsData[1]);
  const [time, setTime] = useState({
    currentTime: {
      minute: 0,
      second: 0,
    },
    totalTime: {
      minute: 0,
      second: 0,
    },
  });
  const [playStatus, setPlayStauts] = useState(false);
  const play = () => {
    audioRef.current.play();
    setPlayStauts(true);
  };
  const pause = () => {
    audioRef.current.pause();
    setPlayStauts(false);
  };
  const playWithId = async (id) => {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlayStauts(true);
  };
  const previos = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id - 1]);
      await audioRef.current.play();
      setPlayStauts(true);
    }
  };
  const next = async () => {
    if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id + 1]);
      await audioRef.current.play();
      setPlayStauts(true);
    }
  };
  const seekSong = (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
  };

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width =
          Math.floor(
            (audioRef.current.currentTime / audioRef.current.duration) * 100
          ) + "%";
        setTime({
          currentTime: {
            minute: Math.floor(audioRef.current.currentTime / 60),
            second: Math.floor(audioRef.current.currentTime % 60),
          },
          totalTime: {
            minute: Math.floor(audioRef.current.duration / 60),
            second: Math.floor(audioRef.current.duration % 60),
          },
        });
      };
    }, 1000);
  }, [audioRef]);

  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    setTrack,
    time,
    setTime,
    setPlayStauts,
    playStatus,
    play,
    pause,
    playWithId,
    previos,
    next,
    seekSong,
  };
  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};
export default PlayerContextProvider;
