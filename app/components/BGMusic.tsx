import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

interface Props {
  state: boolean;
}

function BGMusic(props: Props) {
  const canPlay = props.state;
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    canPlay ? audioRef?.current?.play() : audioRef?.current?.pause();
  }, [canPlay]);

  return (
    <div className="absolute">
      <audio ref={audioRef} autoPlay={canPlay} loop>
        <source src={"/bg.mpga"} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default BGMusic;
